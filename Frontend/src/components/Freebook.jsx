import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://backend-nu-six-49.vercel.app/book",
        );

        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">
          Free Books Offered to You
        </h1>
        <p>
          We provide a variety of free books, from self-development to finance,
          because growth should be accessible to all.
        </p>
      </div>

      <div className="mt-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
        >
          {book.map((item) => (
            <SwiperSlide key={item._id}>
              <Cards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Freebook;
