import axios from "axios";

const sendCommentary = (postID, newCommentary) => {
return axios
.post("https://aide-cem-server.onrender.com/api/post-commentary", {
postID,
newCommentary,
})
.then((response) => {
return response.data;
})
.catch((error) => {
console.error(error);
});
};

export { sendCommentary };