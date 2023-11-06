import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/add">ADD BOOK</NavLink>
      </li>
      <li>
        <NavLink to="/all">ALL BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/borrowed">BORROWED BOOKS</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white bg-opacity-20  fixed top-0 left-0 right-0 z-40">
        <div className="navbar  container    mx-auto  shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn lg:hidden btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-xs bg-base-300 rounded-xl my-2 dropdown-content space-y-2  z-[1]  w-52"
          >
            {links}
          </ul>
        </div>
        <div className="  hidden lg:flex">
          <ul className="menu menu-horizontal menu-sm gap-1 px-1">{links}</ul>
        </div>
      </div>
      <div className="navbar-center ">
        <div className="flex justify-center">
          <img className="rounded-full w-40" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-end">
        {/* user img name logout btn  */}

        {/* <div className="flex justify-center items-center gap-2">
          <div className="avatar online placeholder">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-[.5rem] md:text-lg ">Name fulll</p>
          <button className="btn btn-sm text-2xl  btn-circle">
            <RiLogoutCircleRLine></RiLogoutCircleRLine>
          </button>
        </div> */}

        {/* log in btn */}
        <button className="btn btn-sm text-2xl  btn-circle">
          <Link to="/login"><RiLoginCircleLine></RiLoginCircleLine></Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
