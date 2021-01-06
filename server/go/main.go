package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/lib/pq"
)

// Status ...
type Status struct { 
	Status string `json:"status"`
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
	Ranking string `json:"ranking"`
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

// Technology .
type Technology struct {
	ID int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	URL string `json:"url"`
	NPM string `json:"npm"`
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

func main() {
	var port string = "8080"
	fmt.Println("Server is running on port", port)
	http.HandleFunc("/", basicRequest)
	// Ethnic Minorities
	http.HandleFunc("/api/ethnic-minorities", getEthnicMinorities)
	// Government
	http.HandleFunc("/api/government/ministries", getGovernmentMinistries)
	// License Plates
	http.HandleFunc("/api/license-plates", getLicensePlates)
	// Maps
	http.HandleFunc("/api/maps/provinces", getMapsProvinces)
	http.HandleFunc("/api/maps/districts", getMapsDistricts)
	http.HandleFunc("/api/maps/wards", getMapsWards)
	http.HandleFunc("/api/maps/postal-codes", getMapsPostalCodes)
	// Technologies
	http.HandleFunc("/api/technologies", getTechnologies)
	// Sports
	http.HandleFunc("/api/sports/clubs", getSportsClubs)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}

func basicRequest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	status := Status { Status: "OK" }
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(status)
}

func openConnection() *sql.DB {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
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

func getMapsProvinces(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(provinces, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getMapsDistricts(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(districts, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getMapsWards(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(wards, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getMapsPostalCodes(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

	rows, err := db.Query("SELECT * FROM maps_postal_codes")
	if err != nil {
		log.Fatal(err)
	}

	var postalCodes []MapsPostalCode

	for rows.Next() {
		var postalCode MapsPostalCode
		err = rows.Scan(
			&postalCode.ID,
			&postalCode.Code,
			&postalCode.Province)
		if err != nil {
			log.Fatal(err)
		}
		postalCodes = append(postalCodes, postalCode)
	}

	bytes, _ := json.MarshalIndent(postalCodes, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getSportsClubs(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(clubs, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getEthnicMinorities(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(ethnicMinorities, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getGovernmentMinistries(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(ministries, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getLicensePlates(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(plates, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}

func getTechnologies(w http.ResponseWriter, r *http.Request) {
	db := openConnection()

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

	bytes, _ := json.MarshalIndent(technologies, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)

	defer rows.Close()
	defer db.Close()
}