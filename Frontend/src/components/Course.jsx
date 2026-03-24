import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
// import list from "../data/list.json";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://book-shop-app-s7e2.onrender.com/book",
        );
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! 📑</span>
          </h1>
          <p className="mt-12">
            Browse a diverse collection of books carefully curated to inspire
            growth, spark curiosity, and expand your knowledge across different
            areas of life. From self-development and finance to mindset,
            productivity, and powerful life lessons, each book is selected to
            help you learn, evolve, and take meaningful steps toward your goals.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
          {/* {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Course;
