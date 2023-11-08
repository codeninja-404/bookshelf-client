import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const BorrowedCard = ({ book, setBorrowed, borrowed }) => {
  const axios = useAxios();
  const handleReturn = () => {
    axios
      .delete(`/borrowed/${book._id}`)
      .then((res) => {
        axios
          .get("/books")
          .then((res) => {
            const bookUp = res.data.find((item) => item._id == book.trackerId);
            axios.patch(
              `/books/${bookUp._id}?quantity=${parseInt(bookUp.quantity) + 1}`
            );
          })
          .catch((err) => {});

        // axios.patch(`/books/${book.trackerId}?quantity=${book.quantity + 1}`); //id eyta hoibonaa .....
        const newBorrowed = borrowed.filter((item) => item._id !== book._id);
        setBorrowed(newBorrowed);
        toast.success("Returned book successfully..");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="card card-side bg-base-100 dark:bg-gray-500 shadow-xl shadow-black h-96 md:h-60 ">
      <figure className="p-3 ">
        <img
          src="https://miblart.com/wp-content/uploads/2020/10/6tZyPWlI-683x1024.jpeg"
          alt="Movie"
          className="rounded h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{book.bookName}</h2>
        <p className="uppercase font-semibold">Category : {book.category}</p>
        <p>Borrowed on : {book.borrowedDate.slice(0, 10)}</p>
        <p>Return Date : {book.returnDate.slice(0, 10)}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleReturn}
            className="btn btn-primary btn-sm px-4"
          >
            return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;
