package controller

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/Kruzikael014/testFile/config"
	"github.com/Kruzikael014/testFile/model"
	"github.com/gin-gonic/gin"
)

func GetAllPosts(c *gin.Context) {
	var posts []model.Post
	if err := config.DB.Find(&posts).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, posts)
}

func Test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Success"})
}

func UploadPost(c *gin.Context) {
	var request model.Post

	request.Title = c.PostForm("post_title")
	request.UploaderName = c.PostForm("uploader_name")

	file, _, err := c.Request.FormFile("post_item")

	if err != nil {
		fmt.Println("Failed to retrieve file from client!")
		c.JSON(http.StatusOK, gin.H{"message": "Failed to retrieve file from client!"})
		panic(err)
	}

	defer file.Close()

	fileBytes, err := ioutil.ReadAll(file)

	if err != nil {
		fmt.Println("Failed to convert file to bytes")
		c.JSON(http.StatusOK, gin.H{"message": "Failed to convert file to bytes"})
		panic(err)
	}

	var newPost model.Post = model.Post{Title: request.Title, UploaderName: request.UploaderName, Item: fileBytes}

	result := config.DB.Create(&newPost)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Post created successfully"})
}
