import { useEffect, useState } from "react";
import { getCommentsByPostId } from "../../services/posts";

export default function Comment(props) {
  const { postId } = props;
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getCommentsByPostId(postId).then((data) => setComments(data));
  }, [postId]);

  return (
    <>
      {comments ? (
        comments.map((comment) => (
          <div key={comment.id} className="post__container">
            <span>{comment.name}</span>
            <span>{comment.email}</span>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>Esperando data del post...</p>
      )}
    </>
  );
}
