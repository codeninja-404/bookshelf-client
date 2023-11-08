import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvides";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
    <div className="bg-white bg-opacity-20 shadow  fixed top-0 left-0 right-0 z-40">
      <div className="navbar  container    mx-auto  ">
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
          <div className="flex mx-2">
            <input
              type="checkbox"
              onClick={handleThemeSwitch}
              className="toggle"
            />
          </div>
          {user ? (
            <>
              <div className="flex justify-center items-center gap-2">
                <div className="avatar online placeholder">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="text-[.5rem] md:text-lg ">{user.displayName}</p>
                <button className="btn btn-sm text-2xl  btn-circle">
                  <Link onClick={() => logOut()} to="/">
                    <RiLogoutCircleRLine></RiLogoutCircleRLine>
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <button className="btn btn-sm text-2xl  btn-circle">
              <Link to="/login">
                <RiLoginCircleLine></RiLoginCircleLine>
              </Link>
            </button>
          )}
          {/* user img name logout btn  */}

          {/* log in btn */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
