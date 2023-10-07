package route

import (
	"github.com/Kruzikael014/testFile/controller"
	"github.com/gin-gonic/gin"
)

func PostRoute(e *gin.Engine) {
	e.GET("/get-posts", controller.GetAllPosts)
	e.GET("/test", controller.Test)
	e.POST("/upload-image", controller.UploadPost)
}
