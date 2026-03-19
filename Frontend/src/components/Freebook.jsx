import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards.jsx";
import axios from "axios";
import SliderImport from "react-slick";

function Freebook() {
  const [book, setBook] = useState([]);
  const Slider = SliderImport.default || SliderImport;
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://backend-nu-six-49.vercel.app/book",
        );

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">
            Free Books Offered to You
          </h1>
          <p>
            We provide a variety of free books, from self-development to
            finance, because growth should be accessible to all. Turn the page,
            something amazing awaits. Read bold, Live bigger.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
