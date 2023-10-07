import axios from "axios";
export default async function getPosts() {
  try {
    const response = await axios.get("http://localhost:8088/get-posts");
    return response;
  } catch (error) {
    console.log(error);
  }
}
