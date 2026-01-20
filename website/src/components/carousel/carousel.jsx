import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import { ChevronRight } from "src/icons/chevronRight";
import { ChevronLeft } from "src/icons/chevronLeft";

const Carousel = ({ children }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        a11y={{
          enabled: true,
          prevSlideMessage: "Föregående slide",
          nextSlideMessage: "Nästa slide",
          firstSlideMessage: "Detta är första sliden",
          lastSlideMessage: "Detta är sista sliden",
          paginationBulletMessage: "Gå till slide {{index}}",
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        centeredSlides={true}
        pagination={{ el: ".custom-pagination", clickable: true }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="mb-6"
      >
        {children}
      </Swiper>
      <div className="flex justify-between mb-20 max-w-2xs mx-auto">
        <button
          className={`custom-prev p-2 border rounded ${
            isBeginning
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ChevronLeft />
        </button>
        <div className="custom-pagination w-max! cursor-pointer"></div>
        <button
          className={`custom-next p-2 border rounded ${
            isEnd
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;
