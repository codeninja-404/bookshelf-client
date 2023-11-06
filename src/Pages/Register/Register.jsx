import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="pt-32  ">
      <div className="px-2 mx-auto mb-20 ">
        <div className="hero-content mx-auto flex-col ">
          <h1 className="text-4xl text-center  font-bold uppercase ">
            create account
          </h1>
          <div className="  w-full max-w-lg   rounded-xl  shadow-xl shadow-black">
            <form className=" px-3 py-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
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
                  className="btn btn-sm w-2/3 mx-auto btn-warning "
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center py-2">
                <Link to="/login" className="btn btn-sm w-2/3 mx-auto ">
                  go to log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
