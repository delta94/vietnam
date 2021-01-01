package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

// Status ...
type Status struct { 
	Status string `json:"status"`
}

// MapsProvince ..
type MapsProvince struct {
	ID					int `json:"id"`
	Name				string `json:"name"`
	Capital			string `json:"capital"`
	Level				string `json:"level"`
	MacroRegion	string `json:"macro_region"`
	region			string `json:"region"`
}

type PostgreConfigs {
	user string
}

func getEnv() {
	err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
	}
	user := os.Getenv("DB_POSTGRE_USER")
  host := os.Getenv("DB_POSTGRE_HOST")
	dbname := os.Getenv("DB_POSTGRE_DATABASE")
  password := os.Getenv("DB_POSTGRE_PASSWORD")
	port := os.Getenv("DB_POSTGRE_PORT")

	return { user, host, dbname, password, port}
}

func main() {
	var port string = "8080"
	fmt.Println("Server is running on port", port)
	http.HandleFunc("/", basicRequest)
	http.HandleFunc("/api/maps/provinces", getMapsProvinces)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}

func basicRequest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	status := Status { Status: "OK" }
	json.NewEncoder(w).Encode(status)
}

func openConnection() *sql.DB {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
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

	rows, err := db.Query("SELECT * FROM mapsprovinces")
	if err != nil {
		log.Fatal(err)
	}

	var provinces []MapsProvince

	for rows.Next() {
		var province MapsProvince
		rows.Scan(&province.Name, &province.Capital)
		provinces = append(provinces, province)
	}

	provincesBytes, _ := json.MarshalIndent(provinces, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(provincesBytes)

	defer rows.Close()
	defer db.Close()
}