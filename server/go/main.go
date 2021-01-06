package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"sort"
	"strings"

	"github.com/joho/godotenv"
	"github.com/lib/pq"
)

// Status ...
type Status struct { 
	Status string `json:"status"`
	Endpoints []string `json:"endpoints"`
}

// EthnicMinority ...
type EthnicMinority struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	TypeEn string `json:"type_en"`
}

// GovernmentMinistry ...
type GovernmentMinistry struct {
	ID int `json:"id"`
	Short string `json:"short"`
	Name string `json:"name"`
	NameEn string `json:"name_en"`
	Level string `json:"level"`
	LevelEn string `json:"level_en"`
}

// GovernmentOfficial ...
type GovernmentOfficial struct {
	ID int `json:"id"`
	Ranking int `json:"ranking"`
	Title string `json:"title"`
	TitleEn string `json:"title_en"`
	TitleShort string `json:"title_short"`
	Name string `json:"name"`
	Gender string `json:"gender"`
	GenderEn string `json:"gender_en"`
	StartDate string `json:"start_date"`
	EndDate string `json:"end_date"`
	Note string `json:"note"`
}

// LicensePlate ...
type LicensePlate struct {
	ID int `json:"id"`
	License string `json:"license"`
	Definition string `json:"definition"`
	Type string `json:"type"`
}

// MapsPostalCode ...
type MapsPostalCode struct {
	ID int `json:"id"`
	Code string `json:"code"`
	Province string `json:"province"`
}

// MapsProvince ..
type MapsProvince struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Capital string `json:"capital"`
	Level string `json:"level"`
	LevelEn string `json:"level_en"`
	MacroRegion string `json:"macro_region"`
	MacroRegionEn string `json:"macro_region_en"`
	Region string `json:"region"`
	RegionEn string `json:"region_en"`
}

// MapsDistrict ...
type MapsDistrict struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Level string `json:"level"`
	LevelEn string `json:"level_en"`
	Province string `json:"province"`
}

// MapsWard ..
type MapsWard struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Level string `json:"level"`
	LevelEn string `json:"level_en"`
	District string `json:"district"`
	Province string `json:"province"`
}

// NationalAssemblyMember .
type NationalAssemblyMember struct {
	ID int `json:"id"`
	No int `json:"no"`
	Name string `json:"name"`
	DateOfBirth string `json:"date_of_birth"`
	Gender string `json:"gender"`
	Province string `json:"province"`
	Percentage int `json:"percentage"`
	District string `json:"district"`
	CityOfBirth string `json:"city_of_birth"`
	Degree string `json:"degree"`
	Active string `json:"active"`
}

// PhonesPrefix .
type PhonesPrefix struct {
	ID int `json:"id"`
	Prefix string `json:"prefix"`
	Provider string `json:"provider"`
	ProviderID string `json:"provider_id"`
}

// SportsClub .
type SportsClub struct {
	ID int `json:"id"`
	Sport string `json:"sport"`
	SportEn string `json:"sport_en"`
	Competition	string `json:"competition"`
	City string `json:"city"`
	Name string `json:"name"`
}

// Technology .
type Technology struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	URL string `json:"url"`
	NPM string `json:"npm"`
}

func main() {
	loadEnv()

	var port string = os.Getenv("PORT")
	fmt.Println("Server is running on port", port)

	loadRoutes()

	log.Fatal(http.ListenAndServe(":" + port, nil))
}

func loadEnv() {
	var env string = getEnv("ENV", "")
	fmt.Println("env", env)
	if env != "production" {
		fmt.Println("Loading .env")
		err := godotenv.Load()
		if err != nil {
			log.Fatal("Error loading .env file")
		}
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
			return value
	}
	return fallback
}

func loadRoutes() {
	http.HandleFunc("/", getRoot)
	// Ethnic Minorities
	http.HandleFunc("/ethnic-minorities", getEthnicMinorities)
	// Government
	http.HandleFunc("/government", getGovernment)
	// Government (Ministries)
	http.HandleFunc("/government/ministries", getGovernmentMinistries)
	// Government (Officials)
	http.HandleFunc("/government/incumbents", getGovernmentIncumbents)
	http.HandleFunc("/government/general-secretaries", getGovernmentGeneralSecretaries)
	http.HandleFunc("/government/presidents", getGovernmentPresidents)
	http.HandleFunc("/government/prime-ministers", getGovernmentPrimeMinisters)
	http.HandleFunc("/government/national-assembly/chairs", getNationalAssemblyChairs)
	http.HandleFunc("/government/national-assembly/members", getNationalAssemblyMembers)
	http.HandleFunc("/government/ministers", getGovernmentMinisters)
	// License Plates
	http.HandleFunc("/license-plates", getLicensePlates)
	// Maps
	http.HandleFunc("/maps", getMaps)
	http.HandleFunc("/maps/provinces", getMapsProvinces)
	http.HandleFunc("/maps/districts", getMapsDistricts)
	http.HandleFunc("/maps/wards", getMapsWards)
	http.HandleFunc("/maps/postal-codes", getMapsPostalCodes)
	// Phones
	http.HandleFunc("/phones", getPhones)
	http.HandleFunc("/phones/prefixes", getPhonesPrefixes)
	// Sports
	http.HandleFunc("/sports", getSports)
	http.HandleFunc("/sports/clubs", getSportsClubs)
	// Technologies
	http.HandleFunc("/technologies", getTechnologies)
}

func openSQLConnection() *sql.DB {
	// user := os.Getenv("DB_POSTGRE_USER")
	// host := os.Getenv("DB_POSTGRE_HOST")
	// dbname := os.Getenv("DB_POSTGRE_DATABASE")
	// password := os.Getenv("DB_POSTGRE_PASSWORD")
	// port := os.Getenv("DB_POSTGRE_PORT")

	uri := os.Getenv("DB_POSTGRE_URI")

	connection, _ := pq.ParseURL(uri)
	connection += " sslmode=require"

	db, err := sql.Open("postgres", connection)
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	return db
}

func returnJSONresponse(w http.ResponseWriter, response interface{}) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func getRoot(w http.ResponseWriter, r *http.Request) {
	endpoints := []string {
		"ethnic-minorities",
		"government",
		"license-plates",
		"maps",
		"phones",
		"sports",
		"technologies",
	}
	sort.Strings(endpoints)
	status := Status { Status: "OK", Endpoints: endpoints }
	returnJSONresponse(w, status)
}

func getMapsProvinces(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM maps_provinces")
	if err != nil {
		log.Fatal(err)
	}

	var provinces []MapsProvince

	for rows.Next() {
		var province MapsProvince
		err = rows.Scan(
			&province.ID,
			&province.Name,
			&province.Capital,
			&province.Level,
			&province.LevelEn,
			&province.MacroRegion,
			&province.MacroRegionEn,
			&province.Region,
			&province.RegionEn)
		if err != nil {
			log.Fatal(err)
		}
		provinces = append(provinces, province)
	}

	returnJSONresponse(w, provinces)

	defer rows.Close()
	defer db.Close()
}

func getMapsDistricts(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM maps_districts")
	if err != nil {
		log.Fatal(err)
	}

	var districts []MapsDistrict

	for rows.Next() {
		var district MapsDistrict
		err = rows.Scan(
			&district.ID,
			&district.Name,
			&district.Level,
			&district.LevelEn,
			&district.Province)
		if err != nil {
			log.Fatal(err)
		}
		districts = append(districts, district)
	}

	returnJSONresponse(w, districts)

	defer rows.Close()
	defer db.Close()
}

func getMapsWards(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM maps_wards")
	if err != nil {
		log.Fatal(err)
	}

	var wards []MapsWard

	for rows.Next() {
		var ward MapsWard
		err = rows.Scan(
			&ward.ID,
			&ward.Name,
			&ward.Level,
			&ward.LevelEn,
			&ward.District,
			&ward.Province)
		if err != nil {
			log.Fatal(err)
		}
		wards = append(wards, ward)
	}

	returnJSONresponse(w, wards)

	defer rows.Close()
	defer db.Close()
}

func getMapsPostalCodes(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM maps_postal_codes")
	if err != nil {
		log.Fatal(err)
	}

	var codes []MapsPostalCode

	for rows.Next() {
		var code MapsPostalCode
		err = rows.Scan(
			&code.ID,
			&code.Code,
			&code.Province)
		if err != nil {
			log.Fatal(err)
		}
		codes = append(codes, code)
	}

	returnJSONresponse(w, codes)

	defer rows.Close()
	defer db.Close()
}

func getSportsClubs(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM sports_clubs")
	if err != nil {
		log.Fatal(err)
	}

	var clubs []SportsClub

	for rows.Next() {
		var club SportsClub
		err = rows.Scan(
			&club.ID,
			&club.Sport,
			&club.SportEn,
			&club.Competition,
			&club.City,
			&club.Name,
		)
		if err != nil {
			log.Fatal(err)
		}
		clubs = append(clubs, club)
	}

	returnJSONresponse(w, clubs)

	defer rows.Close()
	defer db.Close()
}

func getEthnicMinorities(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM ethnic_minorities")
	if err != nil {
		log.Fatal(err)
	}

	var ethnicMinorities []EthnicMinority

	for rows.Next() {
		var ethnicMinority EthnicMinority
		err = rows.Scan(
			&ethnicMinority.ID,
			&ethnicMinority.Name,
			&ethnicMinority.Type,
			&ethnicMinority.TypeEn,
		)
		if err != nil {
			log.Fatal(err)
		}
		ethnicMinorities = append(ethnicMinorities, ethnicMinority)
	}

	returnJSONresponse(w, ethnicMinorities)

	defer rows.Close()
	defer db.Close()
}

func getGovernment(w http.ResponseWriter, r *http.Request) {
	endpoints := []string{
		"ministries",
		"incumbents",
		"general-secretaries",
		"presidents",
		"prime-ministers",
		"national-assembly/chairs",
		"national-assembly/members",
		"ministers",
	}
	sort.Strings(endpoints)
	status := Status { Status: "OK", Endpoints: endpoints }
	returnJSONresponse(w, status)
}

func getMaps(w http.ResponseWriter, r *http.Request) {
	endpoints := []string{
		"postal-codes",
		"provinces",
		"districts",
		"wards",
	}
	sort.Strings(endpoints)
	status := Status { Status: "OK", Endpoints: endpoints }
	returnJSONresponse(w, status)
}

func getSports(w http.ResponseWriter, r *http.Request) {
	endpoints := []string{
		"clubs",
	}
	sort.Strings(endpoints)
	status := Status { Status: "OK", Endpoints: endpoints }
	returnJSONresponse(w, status)
}

func getGovernmentMinistries(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_ministries")
	if err != nil {
		log.Fatal(err)
	}

	var ministries []GovernmentMinistry

	for rows.Next() {
		var ministry GovernmentMinistry
		err = rows.Scan(
			&ministry.ID,
			&ministry.Short,
			&ministry.Name,
			&ministry.NameEn,
			&ministry.Level,
			&ministry.LevelEn,
		)
		if err != nil {
			log.Fatal(err)
		}
		ministries = append(ministries, ministry)
	}

	returnJSONresponse(w, ministries)

	defer rows.Close()
	defer db.Close()
}

func getLicensePlates(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM license_plates")
	if err != nil {
		log.Fatal(err)
	}

	var plates []LicensePlate

	for rows.Next() {
		var plate LicensePlate
		err = rows.Scan(
			&plate.ID,
			&plate.License,
			&plate.Definition,
			&plate.Type,
		)
		if err != nil {
			log.Fatal(err)
		}
		plates = append(plates, plate)
	}

	returnJSONresponse(w, plates)

	defer rows.Close()
	defer db.Close()
}

func getTechnologies(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM technologies")
	if err != nil {
		log.Fatal(err)
	}

	var technologies []Technology

	for rows.Next() {
		var technology Technology
		err = rows.Scan(
			&technology.ID,
			&technology.Name,
			&technology.Type,
			&technology.URL,
			&technology.NPM,
		)
		if err != nil {
			log.Fatal(err)
		}
		technologies = append(technologies, technology)
	}

	returnJSONresponse(w, technologies)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentIncumbents(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials WHERE end_date = 'incumbent'")
	if err != nil {
		log.Fatal(err)
	}

	var incumbents []GovernmentOfficial

	for rows.Next() {
		var incumbent GovernmentOfficial
		err = rows.Scan(
			&incumbent.ID,
			&incumbent.Ranking,
			&incumbent.Title,
			&incumbent.TitleEn,
			&incumbent.TitleShort,
			&incumbent.Name,
			&incumbent.Gender,
			&incumbent.GenderEn,
			&incumbent.StartDate,
			&incumbent.EndDate,
			&incumbent.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		incumbents = append(incumbents, incumbent)
	}

	returnJSONresponse(w, incumbents)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentGeneralSecretaries(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials WHERE title_short = 'general-secretary'")
	if err != nil {
		log.Fatal(err)
	}

	var secretaries []GovernmentOfficial

	for rows.Next() {
		var secretary GovernmentOfficial
		err = rows.Scan(
			&secretary.ID,
			&secretary.Ranking,
			&secretary.Title,
			&secretary.TitleEn,
			&secretary.TitleShort,
			&secretary.Name,
			&secretary.Gender,
			&secretary.GenderEn,
			&secretary.StartDate,
			&secretary.EndDate,
			&secretary.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		secretaries = append(secretaries, secretary)
	}

	returnJSONresponse(w, secretaries)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentPresidents(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials WHERE title_short = 'president'")
	if err != nil {
		log.Fatal(err)
	}

	var presidents []GovernmentOfficial

	for rows.Next() {
		var president GovernmentOfficial
		err = rows.Scan(
			&president.ID,
			&president.Ranking,
			&president.Title,
			&president.TitleEn,
			&president.TitleShort,
			&president.Name,
			&president.Gender,
			&president.GenderEn,
			&president.StartDate,
			&president.EndDate,
			&president.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		presidents = append(presidents, president)
	}

	returnJSONresponse(w, presidents)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentPrimeMinisters(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials WHERE title_short = 'prime-minister'")
	if err != nil {
		log.Fatal(err)
	}

	var ministers []GovernmentOfficial

	for rows.Next() {
		var minister GovernmentOfficial
		err = rows.Scan(
			&minister.ID,
			&minister.Ranking,
			&minister.Title,
			&minister.TitleEn,
			&minister.TitleShort,
			&minister.Name,
			&minister.Gender,
			&minister.GenderEn,
			&minister.StartDate,
			&minister.EndDate,
			&minister.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		ministers = append(ministers, minister)
	}

	returnJSONresponse(w, ministers)

	defer rows.Close()
	defer db.Close()
}

func getNationalAssemblyChairs(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials WHERE title_short = 'national-assembly-chair'")
	if err != nil {
		log.Fatal(err)
	}

	var chairs []GovernmentOfficial

	for rows.Next() {
		var chair GovernmentOfficial
		err = rows.Scan(
			&chair.ID,
			&chair.Ranking,
			&chair.Title,
			&chair.TitleEn,
			&chair.TitleShort,
			&chair.Name,
			&chair.Gender,
			&chair.GenderEn,
			&chair.StartDate,
			&chair.EndDate,
			&chair.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		chairs = append(chairs, chair)
	}

	returnJSONresponse(w, chairs)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentMinisters(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	ministry, present := query["ministry"]
	var whereClause string
  if whereClause = ""; present && len(ministry) != 0 {
		fmt.Println("ministry is present")
		whereClause = "WHERE title_short = '" + strings.Join(ministry, ",") + "'"
	}

	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM government_officials " + whereClause)
	if err != nil {
		log.Fatal(err)
	}

	var ministers []GovernmentOfficial

	for rows.Next() {
		var minister GovernmentOfficial
		err = rows.Scan(
			&minister.ID,
			&minister.Ranking,
			&minister.Title,
			&minister.TitleEn,
			&minister.TitleShort,
			&minister.Name,
			&minister.Gender,
			&minister.GenderEn,
			&minister.StartDate,
			&minister.EndDate,
			&minister.Note,
		)
		if err != nil {
			log.Fatal(err)
		}
		ministers = append(ministers, minister)
	}

	returnJSONresponse(w, ministers)

	defer rows.Close()
	defer db.Close()
}

func getNationalAssemblyMembers(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	no, present := query["no"]
	var whereClause string
  if whereClause = ""; present && len(no) != 0 {
		fmt.Println("no is present")
		whereClause = "WHERE no = " + strings.Join(no, ",")
	}

	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM national_assembly_members " + whereClause)
	if err != nil {
		log.Fatal(err)
	}

	var members []NationalAssemblyMember

	for rows.Next() {
		var member NationalAssemblyMember
		err = rows.Scan(
			&member.ID,
			&member.No,
			&member.Name,
			&member.DateOfBirth,
			&member.Gender,
			&member.Province,
			&member.Percentage,
			&member.District,
			&member.CityOfBirth,
			&member.Degree,
			&member.Active,
		)
		if err != nil {
			log.Fatal(err)
		}
		members = append(members, member)
	}

	returnJSONresponse(w, members)

	defer rows.Close()
	defer db.Close()
}

func getPhones(w http.ResponseWriter, r *http.Request) {
	endpoints := []string{
		"prefixes",
	}
	sort.Strings(endpoints)
	status := Status { Status: "OK", Endpoints: endpoints }
	returnJSONresponse(w, status)
}

func getPhonesPrefixes(w http.ResponseWriter, r *http.Request) {
	db := openSQLConnection()

	rows, err := db.Query("SELECT * FROM phones_prefixes")
	if err != nil {
		log.Fatal(err)
	}

	var prefixes []PhonesPrefix

	for rows.Next() {
		var prefix PhonesPrefix
		err = rows.Scan(
			&prefix.ID,
			&prefix.Prefix,
			&prefix.Provider,
			&prefix.ProviderID,
		)
		if err != nil {
			log.Fatal(err)
		}
		prefixes = append(prefixes, prefix)
	}

	returnJSONresponse(w, prefixes)

	defer rows.Close()
	defer db.Close()
}