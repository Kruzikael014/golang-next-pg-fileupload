type UploadPostForm = {
  post_title: string;
  post_item: FileList;
  uploader_name: string;
};

type UploadPostRequest = {
  post_title: string;
  post_item: File;
  uploader_name: string;
};
