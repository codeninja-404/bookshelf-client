import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Tools/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
