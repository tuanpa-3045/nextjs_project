import axios from "axios";

export async function login(data) {
  console.log(data);
};

export async function register(data) {
  return await axios.post('/register', data);
};