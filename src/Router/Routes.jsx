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
import UpdateBook from "../Pages/Update/UpdateBook";
import BasedBooks from "../Pages/BasedBooks/BasedBooks";
import Details from "../Pages/Details/Details";
import Read from "../Pages/Read/Read";

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
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Container>
              <UpdateBook></UpdateBook>
            </Container>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Container>
              <Details></Details>
            </Container>
          </PrivateRoute>
        ),
      },
      {
        path: "/basedbooks/:category",
        element: (
          <PrivateRoute>
            <Container>
              <BasedBooks></BasedBooks>
            </Container>
          </PrivateRoute>
        ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivateRoute>
            <Container>
              <Read></Read>
            </Container>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
