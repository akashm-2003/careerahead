import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ResearchPaperCard from "../../components/ResearchPaperCard/ResearchPaperCard";
import "./Publication.css";
import LazyImage from "../../components/ProfessorProfile/ProfessorProfileLazyImage";
import { getOnePublication } from "../../data/ProfessorByCollege";
import { useParams } from "react-router-dom";
import pubimg from "../../assests/publication-icon-7.jpg";
import { GoLinkExternal } from "react-icons/go";

const Publication = () => {
  //     {
  //   title,
  //   author,
  //   citation,
  //   citedby_url,
  //   pub_year,
  //   pub_url,
  //   abstract,
  // }
  // const Id = useParams();
  // console.log("AHHdsflk ", Id);
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [publication, setPublication] = useState({});
  const [loading, setLoading] = useState(false);
  const { collegeId, profileId, pubId } = useParams();
  console.log("params", collegeId, profileId, pubId);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getOnePublication(profileId, pubId, collegeId);
      console.log("res", res);
      // profileId, pubId, collegeId;
      // const data = await getOnePublication();
      setPublication(res);
    } catch (error) {
      console.error("Error fetching publication:", error);
    } finally {
      setLoading(false);
    }
  };
  const mainFunction = async () => {
    await fetchData();
  }
  useEffect(() => {
    mainFunction(); // Call fetchData when the component mounts
  }, []);
  console.log("Hurray !!! ", publication);
  const web = `https://scholar.google.com/${publication?.citedby_url}`;
  const citationUrl = () => {
    window.open(web);
  };
  const publicationUrl = () => {
    window.open(publication?.pub_url);
  };
  return (
    !loading && (
      <>
        <div
          className="flex w-full bg-base-300"
          style={{ backgroundColor: "rgb(216,222,233)" }}
        >
          <div className="main-container ">
            <SearchBar onSetShowSidebar={onSetShowSidebar} />
            <h2 className="text-3xl font-bold title m-auto p-4 card shadow-lg compact bg-slate-100 rounded-2xl">
              {publication?.title || "Title"}
            </h2>
            <div className="lg:flex w-full justify-between m-4">
              <div className="lg:w-1/4 lg:pr-4 mb-2 flex justify-center lg:mb-0">
                <div className="m-2 p-3 card shadow-lg compact bg-slate-100 rounded-2xl">
                  {/* <img
                  src="/publication_image.jpeg"
                  alt="BookImage"
                  className="w-full lg:max-w-full lg:h-auto shadow-md shadow-black-3xl image rounded-lg border-2 border-gray-200"
                /> */}
                  <LazyImage
                    src={pubimg}
                    alt={publication?.professor_name}
                    className="m-auto"
                  />
                </div>
              </div>

              <div className="flex lg:w-3/4 lg:pl-4 m-2 p-2 justify-center lg:mb-0 items-end">
                <div className="pub-details-summary m-1 p-2 flex flex-col place-content-center justify-between card shadow-lg compact bg-slate-100 rounded-2xl">
                  <p className="author text-lg m-2">
                    Authors:{" "}
                    {publication?.author ||
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, amet."}
                  </p>
                  <p className="citation text-lg m-2">
                    Citations: {publication?.citation || "citation"}
                  </p>
                  <p
                    className="citation-url text-lg m-2 btn-link"
                    onClick={citationUrl}
                  >
                    Open citation<GoLinkExternal />
                  </p>
                  <p className="pub-year text-lg m-2">
                    Year of Publication: {publication?.pub_year || "NA"}
                  </p>
                  {/* <p className="pub-year text-lg m-2">
                  Publication Url: {publication.pub_url || "NA"}
                </p> */}
                  {/* <button className="btn btn-primary m-4 bg-blue-400 p-2 rounded-full w-fit self-end bg-[#37b5b6]">
                    Add to read
                  </button> */}
                </div>
              </div>
            </div>

            <div className="lg:flex w-full flex-col">
              <div className=" lg:p-4 mb-4 lg:mb-0 m-4 card shadow-lg compact bg-slate-100 rounded-2xl">
                <div>
                  <h2 className="text-3xl font-bold m-2 abstract-heading">
                    Abstract
                  </h2>
                  <p className="abstract pl-4 pr-2">
                    {publication?.abstract ||
                      "The abstract for this publication is not available at the moment. Please check back later or contact the author for more information."}
                    <span onClick={publicationUrl} className="btn-link">
                      {publication?.pub_url ? "read more" : " "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:pl-4 m-1 m-4 flex flex-col">
                <h2 className="rec-pub text-3xl mt-2  font-bold mb-2">
                  Recommended Publications
                </h2>
                <div className="research-Scroll">
                  <div className="research-Content justify-start m-auto">
                    <ResearchPaperCard />
                    <ResearchPaperCard />
                    <ResearchPaperCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Publication;
