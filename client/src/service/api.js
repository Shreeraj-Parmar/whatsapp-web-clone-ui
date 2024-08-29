import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    let res = await axios.get(`${url}/users`);
    return res.data;
  } catch (error) {
    console.log("Error while getUsers API", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while setConversation API", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("Error while getConversation API", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    let res = await axios.post(`${url}/message/add`, data);
    return res.data;
  } catch (error) {
    console.log("Error while newMessage API", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error while getMessage API", error.message);
  }
};

export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${url}/file/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response from server:", response);
    return response.data;
  } catch (error) {
    console.log("Error while uploadFile API", error.message);
    throw error;
  }
};
