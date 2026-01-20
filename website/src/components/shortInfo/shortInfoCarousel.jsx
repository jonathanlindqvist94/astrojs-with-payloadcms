import { Text } from "../text/text";
import Carousel from "../carousel/carousel";

import { SwiperSlide } from "swiper/react";

const ShortInfoCarousel = ({ items }) => {
  console.log(items);

  return (
    <Carousel>
      {items.map((item) => {
        const iconPath = `../../icons/${item.icon}.astro`;
        // const IconComponent = iconModules[iconPath]?.default;
        return (
          <SwiperSlide
            key={item.id}
            className="flex flex-col items-center gap-4 text-center"
          >
            {/* {IconComponent && <IconComponent />}*/}
            <Text as="h2" font="fontHeadings" weight="black" margin={false}>
              {item.title}
            </Text>
            <Text as="p" font="fontBody" weight="default">
              {item.description}
            </Text>
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default ShortInfoCarousel;
