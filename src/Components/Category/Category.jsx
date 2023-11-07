import { useEffect, useState } from "react";
import Title from "../Tools/Title";
import CategoryCards from "./CategoryCards";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const Category = () => {
  const [categorys, setCategory] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios
      .get("/categorys")
      .then((res) => {
        toast.success("Category displayed.");
        setCategory(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [axios]);

  return (
    <div className="">
      <Title>Book Category</Title>
      <div className="grid  my-10 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categorys?.map((category) => (
          <CategoryCards key={category.id} category={category}></CategoryCards>
        ))}
      </div>
    </div>
  );
};

export default Category;
