import { useEffect, useState } from "react";
import { isEmpty } from "../../utils/validations";
import { getAllPosts } from "../../services/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="posts__list">
      {isEmpty(posts) ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div className="post-item" key={post.id}>
            <span>{post.title}</span>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
