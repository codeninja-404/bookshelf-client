import axios from "axios";

// import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://bookshelf-server-saidul-arefins-projects.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
