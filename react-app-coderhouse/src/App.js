// import Posts from "./components/Posts/Posts";
import { useState } from "react";
// import Post from "./components/Post/Post";
import Comment from "./components/Comment/Comment";
import "./App.css";

function App() {
  const [postId, setPostId] = useState(1);

  const onClickHandler = () => setPostId(postId + 1);

  return (
    <div className="App">
      <button onClick={onClickHandler}>New Post</button>
      {/* <Post id={postId} /> */}
      <Comment postId={postId} />
    </div>
  );
}

export default App;
