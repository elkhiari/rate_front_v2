import axios from "axios";
import { useContext } from "react";


const Auth = async (code) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/google?code=${code}`, {
        code,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

const addRate = async (rate) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/rate`, rate);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCount = async(token) =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/rate/count`, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
    });
    return response.data.count;
  } catch (error) {
    console.log(error);
    throw error;  
  }
}

const getAuthEc = async(pin) =>{
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/rateAuth/auth`, {pin} );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const lockReq = async(token,id) =>{
  try {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, {},{
      headers: {
        Authorization: `Bearer ${token}`,
    }
    } );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;  
  }
}

const getAllUsers = async(token) =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/`, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;  
  }
}


const getAllRate = async(token) =>{
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/rate/`, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;  
  }
}


const deleteAll = async (token) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/rate/delete`, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {Auth, addRate, getCount, getAuthEc, getAllUsers, lockReq ,getAllRate, deleteAll};