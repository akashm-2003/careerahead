import { useState } from "react";
import logo from "../../assests/logo.png";
import "./ResearchPaperCard.css";

const ResearchPaperCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimer;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  return (
    <div
      className={`h-auto researchPaperCardContainer ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group lg:w-[200px] lg:h-[280px] w-[160px] [perspective:1000px] h-[220px] researchPaperCardInnerContainer">
        <div className="relative rounded-xl border-2 border-white h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div
            className="rounded-lg inset-0 flex flex-col h-[70px] lg:h-[90px] items-center justify-center"
            style={{
              backgroundImage: `url("https://picsum.photos/200/300")`,
              backgroundSize: "cover",
            }}
          >
            <div className="h-[60px] w-[60px] bg-white rounded-full top-7 lg:top-11 relative">
              <img
                src={logo}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Front face of the card */}
          <div className={`front-face ${isHovered ? "invisible" : ""}`}>
            <div className="flex flex-col items-center justify-center mt-5 lg:mt-8">
              <h1 className="text-lg lg:text-2xl">Akash Manna</h1>
              <h5 className="text-sm lg:text-base">Web Developer</h5>

              <h4 className="text-center text-[12px] lg:text-sm px-4 mt-1">
                Research Paper Topic for the intended professor
              </h4>

              <h5 className="mt-1 mb-1 lg:text-xs" style={{ fontSize: "10px" }}>
                -9th August 2023
              </h5>
            </div>
          </div>

          {/* Back face of the card */}
          <div className="absolute inset-0 rounded-xl px-3 py-2 text-center hideFrontBackContent [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex backSideHeight flex-col items-center justify-around">
              <p className="text-[0.62em] lg:text-xs overflow-hidden h-[85%] w-full">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. Contrary to popular belief, Lorem Ipsum is not simply
                random text.
              </p>

              {/* link mapping to be done here */}

              <button className="rounded-md py-1 px-2 text-sm" >
                Read More ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperCard;
