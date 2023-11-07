import Title from "../../Components/Tools/Title";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import BookCard from "../../Components/Tools/BookCard";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const axios = useAxios();

  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    const filteredBooks = books.filter((book) => parseInt(book.quantity) !== 0);
    setBooks(filteredBooks);
    setFilter(true);
    toast.success("Books successfully filtered.");
  };

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        toast.success("Books displayed.");
        setBooks(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [axios]);
  return (
    <div>
      <Title>All Books</Title>
      <div
        className={`mx-14 my-10 text-center ${!filter ? "hidden" : ""}`}
      >
        <h1 className="uppercase text-3xl font-bold border-b-2 pb-4">Filtered books</h1>
      </div>
      <div className="grid mx-14 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {books?.map((book) => (
          <BookCard key={book._id} book={book}>
            <Link to={`/update/${book._id}`}> Update info</Link>
          </BookCard>
        ))}
      </div>
      <div className="mx-14 my-10 text-center">
        <button
          onClick={handleFilter}
          className={`btn btn-warning w-2/4 ${filter ? "hidden" : ""}`}
        >
          fitler books
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
