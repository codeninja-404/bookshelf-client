import { useEffect, useState } from "react";
import Title from "../Tools/Title";
import CategoryCards from "./CategoryCards";
import axios from "axios";

const Category = () => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/server/v1/api/categorys")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Title>Book Category</Title>
      <div className="grid  my-10 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categorys.map((category) => (
          <CategoryCards key={category.id} category={category}></CategoryCards>
        ))}
      </div>
    </div>
  );
};

export default Category;
