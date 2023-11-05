import { Outlet } from "react-router-dom";
import Navbar from "../Components/Headers/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div >
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
