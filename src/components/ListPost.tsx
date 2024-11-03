import { useState, useEffect } from "react";
import { Post } from "./Post";
import classes from "./ListPost.module.css";

type Post = {
  body: string;
  author: string;
};

export function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  const addPostsHandler = (postData: Post) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts([postData, ...posts]);
  };

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item) => (
            <Post author={item.author} body={item.body} key={item.body} />
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div className={classes.containerPosts}>
          <h2>There are no posts yet.</h2>
          <p>Star adding some!</p>
        </div>
      )}

      {isFetching && (
        <div className={classes.containerPosts}>
          <p>Loading posts....</p>
        </div>
      )}
    </>
  );
}
