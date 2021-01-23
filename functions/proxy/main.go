package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

func main() {
	var port string = "8080"
	fmt.Println("Server is running on port", port)
	http.HandleFunc("/", getRequest)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}

func getRequest(w http.ResponseWriter, r *http.Request) {
	var target string = r.URL.Query().Get("url")
	fmt.Println("URL", target)
	if target == "" {
		http.Error(w, "Empty URL", http.StatusInternalServerError)
		return
	}
	origin, _ := url.Parse(target)
	host := origin.Host
	fmt.Println("host", host)
	resp, err := http.Get(target)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()
	contentType := resp.Header.Get("Content-Type")
	fmt.Println("contentType", contentType)
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Host", host)
	w.Header().Set("Content-Type", contentType)
  w.Write(body)
}