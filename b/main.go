package main

import (
	"net/http"

	"github.com/Kruzikael014/testFile/config"
	"github.com/Kruzikael014/testFile/route"
	"github.com/gin-gonic/gin"
	"github.com/rs/cors"
)

func main() {
	config.Connect()
	gin := gin.New()
	options := cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "http://localhost:3001"},
		AllowedMethods:   []string{"GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	}
	// Define route here
	route.PostRoute(gin)

	http.ListenAndServe(":8088", cors.New(options).Handler(gin))
}
