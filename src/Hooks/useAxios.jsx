import axios from "axios";
import { useContext } from "react";

import { AuthContext } from "../Providers/AuthProvides";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut().then(() => {
          navigate("/login");
        });
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxios;
