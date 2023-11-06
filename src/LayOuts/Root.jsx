import { Outlet } from "react-router-dom";
import Navbar from "../Components/Headers/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="">
      <Toaster />
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
