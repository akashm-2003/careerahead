import React from "react";
import Skeleton from "react-loading-skeleton";
import "./ResearchPaperCardHome.css";
const ResearchPaperCardHomeSkeleton = () => {
  const width = window.innerWidth;
  const circleRadius = width > 1024 ? "5em" : "4em";
  return (
    <div className="researchPaperContainerUsedHome ">
      <div className="researchPaperContentUsedHome">
        <div className="researchCardDetailsHome pl-4 pb-2">
          <div className="researchCardNameHome text-base lg:text-lg">
            <h1 className="researchCardNameTextHome">
              <Skeleton width="70%" />
            </h1>
          </div>
          <div className="researchCardDetailsHome">
            <h1 className="researchCardDetailsTextHome">
              <Skeleton count={3} height="12px" width="85%" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperCardHomeSkeleton;
