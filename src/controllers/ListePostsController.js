import axios from "axios";

const getPosts = () => {
  return axios.get("https://aide-cem-server.onrender.com/api/get-posts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getPosts };