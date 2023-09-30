import axios from "axios";

const submitPostForm = async (post) => {
    try {
      const response = await axios.post("https://aide-cem-server.onrender.com/api/posts", post);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { submitPostForm };