import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Title from "../../Components/Tools/Title";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvides";

const Login = () => {
  const { logIn, logInGoogle } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        toast.success("User Logged In successful!");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged In successful!");
      })
      .catch((err) => toast.error("Log In failed!"));
  };
  return (
    <div className="  ">
      <div className="px-2 mx-auto mb-20 ">
        <div className="hero-content mx-auto flex-col ">
          <Title>SIGN in</Title>
          <div className="  w-full max-w-lg   rounded-xl  shadow-xl shadow-black">
            <form onSubmit={handleLogIn} className=" px-3 py-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn w-2/3 btn-sm mx-auto btn-warning  "
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <div className="flex flex-col gap-2 justify-center  py-2">
                <Link onClick={handleGoogleLogIn} className="btn btn-sm w-2/3 mx-auto  btn-primary ">
                  <FcGoogle></FcGoogle>
                   GOOGLE
                </Link>
                <Link to="/register" className=" btn btn-sm w-2/3 mx-auto   ">
                  create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
