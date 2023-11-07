import React, { useEffect, useState } from "react";
import Title from "../../Components/Tools/Title";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import BookCard from "../../Components/Tools/BookCard";

const BasedBooks = () => {
  const { category } = useParams();
  const [categoryBooks, setCategoryBooks] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/books?category=${category.toLowerCase()}`).then((res) => {
      setCategoryBooks(res.data);
      toast.success(`Successfully got ${category} books.`);
    });
  }, [category,axios]);
  return (
    <div>
      <Title> based books : {category} category </Title>
      <div className="grid mx-14 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categoryBooks?.map((book) => (
          <BookCard key={book._id} book={book}>
            <Link to={`/details/${book._id}`}> view details</Link>
          </BookCard>
        ))}
      </div>
    </div>
  );
};

export default BasedBooks;
