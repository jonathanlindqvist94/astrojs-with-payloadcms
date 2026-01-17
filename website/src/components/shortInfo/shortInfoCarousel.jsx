import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Text } from "../text/text";
import { useState } from "react";

import "swiper/css";
import { ChevronRight } from "src/icons/chevronRight";
import { ChevronLeft } from "src/icons/chevronLeft";

const ShortInfoCarousel = ({ items }) => {
  console.log(items);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1.75}
        a11y={{
          enabled: true,
          prevSlideMessage: "Föregående slide",
          nextSlideMessage: "Nästa slide",
          firstSlideMessage: "Detta är första sliden",
          lastSlideMessage: "Detta är sista sliden",
          paginationBulletMessage: "Go to slide {{index}}",
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
        {items.map((item) => {
          const iconPath = `../../icons/${item.icon}.astro`;
          // const IconComponent = iconModules[iconPath]?.default;
          return (
            <li key={item.id} className="max-w-80">
              <SwiperSlide className="flex flex-col items-center gap-4 text-center">
                {/* {IconComponent && <IconComponent />}*/}
                <Text as="h2" font="fontHeadings" weight="black" margin={false}>
                  {item.title}
                </Text>
                <Text as="p" font="fontBody" weight="default">
                  {item.description}
                </Text>
              </SwiperSlide>
            </li>
          );
        })}
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

export default ShortInfoCarousel;
