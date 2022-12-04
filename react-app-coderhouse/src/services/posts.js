const baseURL = "https://jsonplaceholder.typicode.com";

export function getAllPosts() {
  return fetch(`${baseURL}/posts`)
    .then((response) => response.json())
    .then((parsedResponse) => parsedResponse)
    .catch((error) => {
      console.error("[getAllPosts] - ERROR: ", error);
      return [];
    });
}

export function getPost(postId) {
  return fetch(`${baseURL}/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => post)
    .catch((error) => {
      console.error("[getPost] - ERROR: ", error);
      return null;
    });
}

export function getCommentsByPostId(postId) {
  return fetch(`${baseURL}/comments?postId=${postId}`)
    .then((response) => response.json())
    .then((comments) => comments)
    .catch((error) => {
      console.error("[getCommentsByPostId] - ERROR", error);
      return [];
    });
}
