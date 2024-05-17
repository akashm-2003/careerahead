import React, { Fragment } from "react";
import { ProfessorProfileSkeleton } from "./ProfessorProfileSkeleton";
import { MdLocationOn } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? "flex-grow" : ""
        } text-sm font-normal text-right mr-2 ml-3 ${link ? "truncate" : ""}`}
        style={{
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </a>
  );
};
const ProfessorDetailsCard = ({ profile, loading }) => {
  const website = `https://scholar.google.com/citations?user=${profile.scholar_id}&hl=en&oi=ao`;
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={ProfessorProfileSkeleton({
            widthCls: "w-4",
            heightCls: "h-4",
          })}
          title={ProfessorProfileSkeleton({
            widthCls: "w-24",
            heightCls: "h-4",
          })}
          value={ProfessorProfileSkeleton({
            widthCls: "w-full",
            heightCls: "h-4",
          })}
        />
      );
    }

    return array;
  };
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const hIndex = searchParams.get("hIndex");
   const iIndex = searchParams.get("iIndex");
  return (
    <div
      className="card shadow-lg compact bg-base-100 rounded-2xl p-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            // College
            <Fragment>
              {profile.college_name && (
                <ListItem
                  icon={<MdLocationOn />}
                  title="Affiliation:"
                  value={profile.college_name}
                />
              )}
              {/* {social?.linkedin && (
                <ListItem
                  icon={<FaLinkedin />}
                  title="LinkedIn:"
                  value={social.linkedin}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                />
              )} */}

              {website && (
                <ListItem
                  icon={<SiGooglescholar />}
                  title="Website:"
                  value="Scholar"
                  link={website}
                />
              )}
              {profile?.contact_details && (
                <ListItem
                  icon={<RiMailFill />}
                  title="Email:"
                  value={profile?.contact_details}
                  link={`mailto:${profile?.contact_details}`}
                />
              )}
              {profile && (
                <ListItem
                  icon={<AiOutlineNodeIndex />}
                  title="H-index:"
                  value={hIndex}
                />
              )}
              {profile && (
                <ListItem
                  icon={<AiOutlineNodeIndex />}
                  title="i10-index:"
                  value={iIndex}
                />
              )}
              {profile?.total_citations && (
                <ListItem
                  icon={<AiOutlineNodeIndex />}
                  title="Total Citations:"
                  value={profile.total_citations}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorDetailsCard;
