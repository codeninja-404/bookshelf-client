import React, { useEffect, useState } from "react";
import Title from "../../Components/Tools/Title";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Details = () => {
  const [book, setBook] = useState("");
  const axios = useAxios();
  const { id } = useParams();
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
            <p className="">{book?.description?.slice(0, 300)} ......</p>
            <div>
              <Rating style={{ maxWidth: 150 }} readOnly value={book?.rating} />
            </div>
            <div className="card-actions pb-3 justify-center lg:justify-end">
              <button className="btn btn-warning px-7 btn-sm">Borrow</button>
              <Link
                to={`/read/${book?._id}`}
                className="btn btn-secondery px-7 btn-sm"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
