package model

type Post struct {
	ID           uint64 `json:"post_id" gorm:"primaryKey;autoIncrement:true"`
	Title        string `json:"post_title"`
	Item         []byte `json:"post_item"`
	UploaderName string `json:"uploader_name"`
}
