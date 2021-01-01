package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// Message ...
type Message struct { 
	Message string `json:"message"`
}

func main() {
	var port string = "8080"
	fmt.Println("Ứng dụng Golang đang chạy trên cổng", port)
	http.HandleFunc("/", basicRequest)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}

func basicRequest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var message string = "Ứng dụng Golang đang chạy trên Bizfly Cloud";
	basic := Message { Message: message }
	json.NewEncoder(w).Encode(basic)
}