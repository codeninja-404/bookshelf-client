import { useContext, useEffect, useState } from "react";
import Title from "../../Components/Tools/Title";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvides";
import BorrowedCard from "../../Components/Tools/BorrowedCard";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios
      .get(`/borrowed?email=${user.email}`)
      .then((res) => {
        setBorrowed(res.data);
        toast.success("Your borrowed book displayed");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <div>
      <Title>Borrowed Books</Title>
      <div className=" grid md:grid-cols-2 gap-4">
        {borrowed?.map((book) => (
          <BorrowedCard
            key={book._id}
            book={book}
            setBorrowed={setBorrowed}
            borrowed={borrowed}
          ></BorrowedCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
