import axios from "axios";

interface IUser {
  email: string;
  password: string;
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export class UserInstance {
  LoginUser(data: IUser) {
    return axiosInstance.post("/login", data);
  }
}
