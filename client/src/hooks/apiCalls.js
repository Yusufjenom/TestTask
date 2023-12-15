import axios from 'axios';

// const BASE_URL = import.meta.env.REACT_APP_BASE_URL
// console.log(BASE_URL)


export const submitForm = async (payload) => {
    try{
       const response = await axios.post("http://localhost:5000/api/v1/create-post", payload, {
        withCredentials: true
       });
       const result = await response.data;
       console.log(result);
       return result
    }
    catch(err){
        console.log(err.message)
    }
};

export const getApost = async (id) => {
    try{
      const response = await axios.get(`http://localhost:5000/api/v1/post/${id}`);
      const result = await response.data;
      console.log(result);
      return result;
    }
    catch(err){
        console.log(err.message);
    }
};

export const getPosts = async () => {
    try{
      const response = await axios.get(`http://localhost:5000/api/v1/posts`);
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
      const response = await axios.put(`http://localhost:5000/api/v1/update-post/${id}`, payload, {
        withCredentials: true
      });
      const result = await response.data;
      console.log(result);
      return result;
    }
    catch(err){
        console.log(err.message);
    }
};

