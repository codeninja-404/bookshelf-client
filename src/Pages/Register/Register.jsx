import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvides";
import { updateProfile } from "firebase/auth";
import Title from "../../Components/Tools/Title";

const Register = () => {
    const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return toast.error("Password must have atleast 6 charecters.");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have atleast one uppercase letter.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return toast.error("Password must have special charecter.");
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Sign Up Successful");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className=" ">
      <div className="px-2 mx-auto mb-20 ">
      
        <div className=" flex flex-col items-center ">
        <div className=""><Title> create account</Title></div>
          
          <div className="  w-full max-w-lg   rounded-xl  shadow-xl shadow-black">
            <form onSubmit={handleSignUp} className=" px-3 py-4">
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
