import { Link } from "react-router-dom";
import Title from "../../Components/Tools/Title";
import { useState } from "react";

const AddBooks = () => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const handleCatgoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleAddBoook = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photo.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const authorName = form.authorName.value;
    const description = form.description.value;
    const book = {
      photoUrl,
      name,
      quantity,
      authorName,
      category,
      description,
      rating,
    };
    console.log(book);
  };
  return (
    <div>
      <Title>add books</Title>
      <div className="  w-full   rounded-xl  shadow-xl shadow-black">
        <form onSubmit={handleAddBoook} className=" px-3 py-4">
          <div className="grid lg:grid-cols-2 gap-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
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
                placeholder="Name"
                className="p-2 bg-base-100 border-b"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Quantity of the book</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Book Quantity"
                className="p-2 bg-base-100 border-b"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Author Name</span>
              </label>
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
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
              <span className="label-text ">Description of the book</span>
            </label>

            <textarea
              placeholder="Book description"
              className="p-2 bg-base-100 border-b h-20"
              name="description"
              id=""
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button
              className="btn w-2/3 btn-sm mx-auto btn-warning  "
              type="submit"
            >
              add book
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-center  py-2"></div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
