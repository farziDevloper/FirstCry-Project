import React from "react";
import "./SlideShow.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

let data = [
  {
    "id": 1,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_RushHour_P01_Desktop_2022331215514.webp"
  },

  {
    "id": 2,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/HuggiesRCS_Flat40_DPHP_994X399_202235181631.webp"
  },
  {
    "id": 3,
    "image": "https://cdn.fcglcdn.com/brainbees/images/boutique/994x295/26468.webp"
  },
  {
    "id": 4,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_DIAPER_2APR_2022414121256.webp"
  },
  {
    "id": 5,

    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_Buy3_P01_desktop_2022416151328.webp"
  },
  {
    "id": 6,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/Desktop-Banner--994-X-399px_2022418154755.webp"
  },
  {
    "id": 7,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_Fas35_SMR_P01_desktop_202241993255.webp"
  },
  {
    "id": 8,
    "image": "https://cdn.fcglcdn.com/brainbees/banners/test/MPCarnivalUpto44_DPHP_994x399_2022421124918.webp"
  }
];

export const SlideShow =() =>  {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 2500 }}
      >
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <div
              className="carousel__img_container"
              style={{
                backgroundImage: `url(${img.image})`,
              }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


