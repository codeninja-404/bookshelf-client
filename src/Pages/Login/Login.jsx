import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="pt-32  ">
      <div className="px-2 mx-auto mb-20 ">
        <div className="hero-content mx-auto flex-col ">
          <h1 className="text-4xl text-center  font-bold uppercase ">sign in</h1>
          <div className="  w-full max-w-lg   rounded-xl  shadow-xl shadow-black">
            <form className=" px-3 py-4">
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
                <Link className="btn btn-sm w-2/3 mx-auto  btn-primary ">
                  <FcGoogle></FcGoogle>
                  LOG IN WITH GOOGLE
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
