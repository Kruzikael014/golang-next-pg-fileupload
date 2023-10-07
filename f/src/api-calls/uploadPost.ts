import axios from "axios";

export async function uploadImage(req: UploadPostRequest) {
  try {
    const formData = new FormData();
    formData.append("post_item", req.post_item);
    formData.append("post_title", req.post_title);
    formData.append("uploader_name", req.uploader_name);
    const response = await axios.post(
      "http://localhost:8088/upload-image",
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
