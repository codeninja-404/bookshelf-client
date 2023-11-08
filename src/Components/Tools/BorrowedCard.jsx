const BorrowedCard = ({ book, setBorrowed, borrowed }) => {
  const handleReturn = () => {
    console.log("hi");
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl shadow-black h-60">
      <figure className="p-3 ">
        <img
          src="https://miblart.com/wp-content/uploads/2020/10/6tZyPWlI-683x1024.jpeg"
          alt="Movie"
          className="rounded h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{book.bookName}</h2>
        <p className="upper case font-semibold">
          Category : {book.category.toUpperCase()}
        </p>
        <p>Borrowed on : {book.borrowedDate.slice(0, 10)}</p>
        <p>Return Date : {book.returnDate.slice(0, 10)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm px-4">return</button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;
