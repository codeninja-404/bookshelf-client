import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const BookCard = ({ book, children }) => {
  const { name, authorName, category, rating, photoUrl } = book;
  return (
    <div className="card bg-base-100 shadow-black shadow-xl">
      <figure className="p-2">
        <img src={photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="flex pb-2 flex-col items-center text-center">
        <h2 className="text-xl uppercase font-bold">{name}</h2>
        <p>Author : {authorName}</p>
        <p>Category : {category}</p>
        <div>
        <Rating style={{ maxWidth: 150 }} readOnly  value={rating}/>
        </div>
        <div className="card-actions">
          <button className="btn btn-sm my-2">{children} </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
