import { Outlet } from "react-router-dom";
import Navbar from "../Components/Headers/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
