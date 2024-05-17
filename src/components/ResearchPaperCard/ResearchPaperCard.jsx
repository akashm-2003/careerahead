import { useState } from "react";
import logo from "../../assests/logo.png";
import "./ResearchPaperCard.css";

const ResearchPaperCard = ({publication}) => {

  
  const { title, author, abstract, pub_url, pub_year, college, num_citations } =
    publication;

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
      <div className="group lg:w-[220px] lg:h-[330px] w-[160px] [perspective:1000px] h-[220px] researchPaperCardInnerContainer ">
        <div className="relative rounded-xl border-2 border-white h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div
            className="rounded-lg inset-0 flex flex-col h-[70px] lg:h-[90px] items-center justify-center researchPaperCardFront"
            style={{
              backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/05/18/69/35/1000_F_518693540_S66IIgnR4XhlmOwRC13kdfl31NXOXDbb.jpg")`,
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
            <div className="flex flex-col items-center justify-center mt-5 lg:mt-8  text-center text-wrap">
              <h1 className="text-sm lg:text-sm font-bold flex-wrap">
                {title?.slice(0, 50) + "..."}
              </h1>
              <h5 className="text-sm lg:text-base">{college.slice(0, 15)}</h5>

              <h4 className="text-center text-[12px] lg:text-sm px-4 mt-1">
                {author.slice(0, 20) + "..."}
              </h4>
              <h5 className="mt-1  lg:text-xs font-semibold" style={{ fontSize: "10px" }}>
                Citation: {num_citations}
              </h5>
              <h5 className="mb-1 lg:text-xs" style={{ fontSize: "10px" }}>
                {pub_year}
              </h5>
            </div>
          </div>

          {/* Back face of the card */}
          <div className="absolute inset-0 rounded-xl px-3 py-2 text-center hideFrontBackContent [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex backSideHeight flex-col items-center justify-around">
              <p className="text-[0.62em] lg:text-xs overflow-hidden h-[85%] w-full">
                {abstract?.slice(0, 150) + "..."}
              </p>

              {/* link mapping to be done here */}

              <button
                className="rounded-md py-1 px-2 text-sm"
                onClick={(e) => {
                  if (pub_url === undefined) {
                    e.preventDefault();
                  } else {
                    e.preventDefault();
                    window?.open(pub_url, "_blank");
                  }
                }}
              >
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
