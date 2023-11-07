import { useEffect, useState } from "react";
import Title from "../../Components/Tools/Title";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [filteredBook, setFilteredBook] = useState([]);
  const axios = useAxios();
  const handleCatgoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleUptadeBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photo.value;
    const name = form.name.value;
    const authorName = form.authorName.value;

    const book = {
      photoUrl,
      name,
      authorName,
      category,
      rating,
    };

    axios
      .patch(`/books/${id}`, book)
      .then((res) => {
        toast.success("SuccessFully updated book.");
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        const filtered = res.data.find((book) => book._id === id);
        setFilteredBook(filtered);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id, axios]);

  return (
    <div>
      <Title>Update : {id}</Title>
      <div className="  max-w-5xl mx-auto  rounded-xl  shadow-xl shadow-black">
        <form onSubmit={handleUptadeBook} className="  px-3 py-4">
          <div className="grid  lg:grid-cols-2 gap-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={filteredBook.photoUrl}
                placeholder="Photo URL"
                className="p-2 bg-base-100 border-b"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Book Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={filteredBook.name}
                placeholder="Name"
                className="p-2 bg-base-100 border-b"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Category</span>
              </label>
              <select
                name="selectOption"
                value={category}
                onChange={handleCatgoryChange}
                className="p-2 w-full bg-base-100 border-b"
              >
                <option value="">Select category</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="drama">Drama</option>
                <option value="thriller">Thriller</option>
                <option value="fantasy">Fantasey</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Rating</span>
              </label>
              <select
                name="selectOption"
                value={rating}
                onChange={handleRatingChange}
                className="p-2 w-full bg-base-100 border-b"
              >
                <option value="">Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Author Name</span>
            </label>
            <input
              type="text"
              name="authorName"
              defaultValue={filteredBook.authorName}
              placeholder="Author Name"
              className="p-2 bg-base-100 border-b"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn w-2/3 btn-sm mx-auto btn-warning  "
              type="submit"
            >
              update book
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-center  py-2"></div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
