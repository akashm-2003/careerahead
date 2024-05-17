import React from "react";
import logo from "../../assests/logo.png";
import "./ResearchPaperCardHome.css";
const ResearchPaperCardHome = ({ publication }) => {
  const {
    abstract,
    author,
    author_pub_id,
    citation,
    citedby_url,
    cites_id,
    college,
    num_citations,
    pub_url,
    pub_year,
    title,
  } = publication;
  return (
    <div className="researchPaperContainerUsedHome h-full">
      <div className="researchPaperContentUsedHome pl-4 pb-2">
        <div className="researchCardDetailsHome">
          <div className="researchCardNameHome lg:text-lg">
            <h1 className="researchCardNameTextHome font-semibold weigh">
              {title.slice(0, 50)}...
            </h1>
          </div>
          <div className="researchCardDetailsHome">
            <h1 className="researchCardDetailsTextHome">
              {author ? author.split(" and ")[0] : "Author"} |{" "}
              {pub_year ? pub_year : ""}
            </h1>
          </div>
          {num_citations?<div className="researchCardDetailsHome">
            <h1 className="researchCardDetailsTextHome font-medium">
              Number of Citation: {num_citations ? num_citations : ""}
            </h1>
          </div>:""}
          <div className="researchCardDetailsHome">
            <h1 className="researchCardDetailsTextHome">
              {college ? college : ""}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperCardHome;
