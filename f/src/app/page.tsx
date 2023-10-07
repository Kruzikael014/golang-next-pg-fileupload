"use client";
import getPosts from "@/api-calls/getPosts";
import { uploadImage } from "@/api-calls/uploadPost";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import style from "@/style.module.scss"

export default function Home() {
  const { register, handleSubmit } = useForm<UploadPostForm>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response?.data);
    };
    fetchPosts();
  }, []);

  const handleFormSubmission = async (data: UploadPostForm) => {
    const uploadPostRequest: UploadPostRequest = {
      post_item: data.post_item[0],
      post_title: data.post_title,
      uploader_name: data.uploader_name,
    };
    const response = await uploadImage(uploadPostRequest);
    alert(JSON.stringify(response?.data));
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <label htmlFor="title">Title:</label>
        <input {...register("post_title")} type="text" />
        <br />
        <br />
        <label htmlFor="item">Item:</label>
        <input
          {...register("post_item")}
          type="file"
          accept=".txt,.pdf,.jpg,.jpeg,.png"
        />
        <br />
        <br />
        <label htmlFor="uploaderName">Uploader Name:</label>
        <input {...register("uploader_name")} type="text" />
        <br />
        <br />
        <input type="submit" value="Create Post" />
      </form>
      <br />
      <br />
      <hr />
      {posts.map((post, idx) => (
        <div key={idx} style={{ maxWidth: "400px !important" }}>
          <div>
            (#{post.post_id})&nbsp;{post.post_title}
          </div>
          <Image
            src={`data:image/*;base64,${post.post_item}`}
            alt="Description of the image"
            layout="responsive"
            width={1}
            height={1}
            className={style.limit}
          />
          <div>
            Uploaded by : {post.uploader_name}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
