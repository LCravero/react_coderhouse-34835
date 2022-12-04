import { useEffect, useState } from "react";
import { getPost } from "../../services/posts";

export default function Post(props) {
  const { id } = props;
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    getPost(id).then((data) => setPostData(data));
  }, [id]);

  return (
    <>
      {postData ? (
        <div className="post__container">
          <span>{postData.title}</span>
          <p>{postData.body}</p>
        </div>
      ) : (
        <p>Esperando data del post...</p>
      )}
    </>
  );
}
