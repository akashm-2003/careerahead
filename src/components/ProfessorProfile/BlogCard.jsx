import React, { useState } from "react";
import { ProfessorProfileSkeleton } from "./ProfessorProfileSkeleton";

const BlogCard = ({ loading, blog, publications, showMore, setShowMore }) => {
  // const [articles, setArticles] = useState(null);
  console.log(publications[0]);

  const renderArticles = () => {
    return (
      !loading &&
      publications.map((article, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={article.pub_url}
          onClick={(e) => {
            if (article.pub_url === undefined) {
              e.preventDefault();
            } else {
              e.preventDefault();
              window?.open(article.pub_url, "_blank");
            }
          }}
        >
          <div
            className="mx-5 mb-5 rounded-2xl"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex items-center flex-col md:flex-row">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-semibold text-base-content opacity-60 mt-3">
                      {article?.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      Authors: {article?.author}
                    </p>
                    <p className="text-base-content opacity-50 text-xs">
                      Citations: {article?.num_citations}
                    </p>
                    <p className="text-base-content opacity-50 text-xs">
                      Published on: {article?.pub_year}
                    </p>
                    <p className="text-base-content opacity-50 text-xs">
                      Cited on: {article?.citation}
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {/* {article&&article?.abstract.length > 500
                        ? article?.abstract.slice(0, 500) + "..."
                        : article?.abstract} */}
                      {article?.abstract &&
                        (article?.abstract.length > 300
                          ? article?.abstract.slice(0, 300) + "..."
                          : article?.abstract)}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    );
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const renderShowMoreButton = () => {
    return (
      <button className="btn btn-primary" onClick={handleShowMore}>
        Load More
      </button>
    );
  };
  // const renderArticles = () => {
  //   return articles && articles.length ? (
  //     articles.slice(0, blog.limit).map((article, index) => (
  //       <a
  //         className="card shadow-lg compact bg-base-100 cursor-pointer"
  //         key={index}
  //         href={article.link}
  //         onClick={(e) => {
  //           e.preventDefault();

  //           window?.open(article.link, "_blank");
  //         }}
  //       >
  //         <div
  //           className="mx-5 mb-5 rounded-2xl"
  //           style={{ backgroundColor: "rgb(236,239,244) " }}
  //         >
  //           <div className="flex items-center flex-col md:flex-row">
  //             <div className="w-full">
  //               <div className="flex items-start px-4">
  //                 <div className="text-center md:text-left w-full">
  //                   <h2 className="font-semibold text-base-content opacity-60">
  //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //                     Reiciendis eum, vitae alias voluptas doloremque, quidem
  //                     dolorum iste consequuntur, reprehenderit ab consequatur
  //                     ipsam quasi tempora.
  //                   </h2>
  //                   <p className="text-base-content opacity-50 text-xs">
  //                     5 months ago
  //                   </p>
  //                   <p className="mt-3 text-base-content text-opacity-60 text-sm">
  //                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  //                     Reiciendis, quo impedit. Dignissimos neque magnam dicta
  //                     saepe. Quae adipisci repellendus officiis ut quidem!
  //                     Voluptatem atque quis culpa aperiam modi iure distinctio
  //                     officiis, magnam nemo ut assumenda ipsum fugit molestias
  //                     quibusdam velit.
  //                   </p>
  //                   <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
  //                     {article.categories.map((category, index2) => (
  //                       <div
  //                         className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
  //                         key={index2}
  //                       >
  //                         #{category}
  //                       </div>
  //                     ))}
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </a>
  //     ))
  //   ) : (
  //     <div className="text-center mb-6">
  //       <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
  //       <p className="mt-1 text-sm opacity-50 text-base-content">
  //         No recent post
  //       </p>
  //     </div>
  //   );
  // };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {ProfessorProfileSkeleton({
                    widthCls: "w-full",
                    heightCls: "h-full",
                    shape: "",
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {ProfessorProfileSkeleton({
                        widthCls: "w-full",
                        heightCls: "h-8",
                        className: "mb-2 mx-auto md:mx-0",
                      })}
                    </h2>
                    {ProfessorProfileSkeleton({
                      widthCls: "w-24",
                      heightCls: "h-3",
                      className: "mx-auto md:mx-0",
                    })}
                    <div className="mt-3">
                      {ProfessorProfileSkeleton({
                        widthCls: "w-full",
                        heightCls: "h-4",
                        className: "mx-auto md:mx-0",
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {ProfessorProfileSkeleton({
                        widthCls: "w-32",
                        heightCls: "h-4",
                        className: "md:mr-2 mx-auto md:mx-0",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };
  return (
    <div
      className="col-span-1 lg:col-span-2 shadow-lg compact"
      style={{ backgroundColor: "rgb(216,222,233)" }}
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div
            className={`card compact bg-base-100 ${
              loading || (publications && publications.length)
                ? "shadow bg-opacity-40"
                : "shadow-lg"
            }`}
          >
            <div className="card-body" style={{ backgroundColor: "#f0f3ff" }}>
              <div className="mx-3 mb-2">
                <h5 className="card-title">
                  {loading ? (
                    ProfessorProfileSkeleton({
                      widthCls: "w-28",
                      heightCls: "h-8",
                    })
                  ) : (
                    <span className="text-2xl pt-2 font-bold opacity-70">
                      Publications
                    </span>
                  )}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading || !publications
                    ? renderSkeleton()
                    : renderArticles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
