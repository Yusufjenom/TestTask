import axios from 'axios';
axios.defaults.withCredentials = true;


export const submitForm = async (payload) => {
    try{
       const response = await axios.post("https://test-task-server-ashy.vercel.app/api/v1/create-post", payload, {
        withCredentials: true
       });
       const result = await response.data;
       return result
    }
    catch(err){
        console.log(err.message)
    }
};

export const getApost = async (id) => {
    try{
      const response = await axios.get(`https://test-task-server-ashy.vercel.app/api/v1/post/${id}`);
      const result = await response.data;
      return result;
    }
    catch(err){
        console.log(err.message);
    }
};

export const getPosts = async () => {
    try{
      const response = await axios.get(`https://test-task-server-ashy.vercel.app/api/v1/posts`);
      const result = await response.data;
      console.log(result);
      return result;
    }
    catch(err){
        console.log(err.message);
    }
};

export const updatePost = async (id, payload) => {
    try{
      const response = await axios.put(`https://test-task-server-ashy.vercel.app/api/v1/update-post/${id}`, payload, {
        withCredentials: true
      });
      const result = await response.data;
      return result;
    }
    catch(err){
        console.log(err.message);
    }
};

