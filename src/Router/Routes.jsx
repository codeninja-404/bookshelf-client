import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home/Home";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Container from "../Components/Tools/Container";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Router/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: (
          <Container>
            <Register></Register>
          </Container>
        ),
      },
      {
        path: "/login",
        element: (
          <Container>
            <Login></Login>
          </Container>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Container>
              <AddBooks></AddBooks>
            </Container>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: (
          <PrivateRoute>
            <Container>
              <AllBooks></AllBooks>
            </Container>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <Container>
              <BorrowedBooks></BorrowedBooks>
            </Container>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
