package config

import (
	"github.com/Kruzikael014/testFile/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=postgres password=140303 dbname=postsDB port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Gawd damnnn")
	}
	DB = db
	DB.AutoMigrate(&model.Post{})
}
