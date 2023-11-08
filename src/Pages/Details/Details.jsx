import React, { useContext, useEffect, useState } from "react";
import Title from "../../Components/Tools/Title";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvides";

const Details = () => {
  const { user } = useContext(AuthContext);
  const borrowedDate = new Date();
  const [returnDate, setReturnDate] = useState(new Date());
  const [submit, setSubmit] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [book, setBook] = useState("");
  const axios = useAxios();
  const { id } = useParams();

  const handleSubmit = async () => {
    const borrowedBook = {
      trackerId: book._id,
      image: book.photoUrl,
      bookName: book.name,
      category: book.category,
      customerName: user.displayName,
      email: user.email,
      borrowedDate,
      returnDate,
    };
    if (book.quantity <= 0) {
      toast.error("Sorry!!! book out of stock");
      setButtonDisabled(true);
      return;
    }

    await axios.get("/borrowed").then((res) => {
      const exiest = res.data?.find((book) => book.email == borrowedBook.email);
      if (exiest) {
        toast.error("Arleady borrowed.");
        return;
      } else {
        axios.post("/borrowed", borrowedBook).then((res) => {
          if (res.data.acknowledged) {
            toast.success("Borrowed book successfully.");
            axios.patch(`/books/${id}?quantity=${parseInt(book.quantity) - 1}`);
            setSubmit(true);
            if (book?.quantity - 1 <= 0) {
              setButtonDisabled(true);
            }
            return;
          }
          toast.error(res.data);
        });
      }
    });
  };

  useEffect(() => {
    axios
      .get(`/details/${id}`)
      .then((res) => {
        setBook(res.data);
        toast.success(`Successfully got book..`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id, axios]);

  return (
    <div>
      <Title>Details of {book?.name}</Title>
      <div className="mx-14">
        <div className="card  lg:w-5/6 mx-auto p-2 lg:card-side bg-base-100 shadow-xl shadow-black">
          <figure className="p-2 mx-auto lg:w-2/3">
            <img src={book.photoUrl} alt="Album" className="rounded " />
          </figure>
          <div className="flex flex-col  space-y-3 lg:card-body">
            <h2 className="card-title uppercase text-3xl">{book.category}</h2>
            <h2 className="card-title uppercase">Author : {book.authorName}</h2>
            <h2 className=" font-bold text-green-300 uppercase">
              Available pcs :
              {!submit ? `${book.quantity}` : `${book.quantity - 1}`}
            </h2>
            <p className="">{book?.description?.slice(0, 300)} ......</p>
            <div>
              <Rating style={{ maxWidth: 150 }} readOnly value={book?.rating} />
            </div>
            <div className="card-actions pb-3 justify-center lg:justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="btn btn-warning px-7 btn-sm "
                disabled={isButtonDisabled}
              >
                Borrow
              </button>

              <Link
                to={`/read/${book?._id}`}
                className="btn btn-secondery px-7 btn-sm"
              >
                Read
              </Link>
            </div>
          </div>
        </div>

        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div>
              <div>
                <label className="label">
                  <span className="label-text ">Borrowing date</span>
                </label>
                <DatePicker readOnly selected={borrowedDate} />
              </div>
              <div>
                <label className="label">
                  <span className="label-text ">Return date</span>
                </label>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                />
              </div>
              <div className="form-control py-3">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  readOnly
                  name="name"
                  defaultValue={user.displayName}
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
              <div className="form-control py-3">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  readOnly
                  name="email"
                  defaultValue={user.email}
                  className="p-2 bg-base-100 border-b"
                  required
                />
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary px-7 btn-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Details;
