import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative ">
      <div
        className={`flex transition-transform justify-between items-center ease-out duration-500 `}
        style={{
          transform:
            window.innerWidth <= 768
              ? `translateX(-${current * 100}%)`
              : `translateX(-${(current * 100/3)}%)`,
        }}
        // sm:translateX(-${current * 100}%) lg:translateX(-${current * 100/3}%)
        // style={{
        //   transform: `translateX(-${current * 100}%)`,
        // }}
      >
        {slides}
      </div>
      <div className="absolute flex inset-0 items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronRight size={20} />
        </button>
      </div>
      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                current === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
