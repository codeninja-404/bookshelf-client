import React from "react";
import { Link } from "react-router-dom";

const CategoryCards = ({ category }) => {
  return (
    <div className=" mx-auto">
      <div className="w-[70vw] md:w-80 lg:w-full h-full flex flex-col  items-center ">
        <div className="card h-full w-[70vw]md:w-80 lg:w-full  bg-base-100 shadow-black shadow-xl">
          <figure className="h-full">
            <img
              src={category.thumbnail}
              alt="Shoes"
              className="rounded-2xl h-full   border-2 border-[#dca54c]"
            />
          </figure>
          <div className=" p-3">
            <p className="card-title">{category.name}</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link
            to={`/basedbooks/${category.name}`}
            className="btn btn-sm rounded-full  btn-primary my-4 w-2/3"
          >
            SHOW BOOKS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
