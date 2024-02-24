import React from "react";
import { ProfessorProfileSkeleton } from "./ProfessorProfileSkeleton";
import LazyImage from "./ProfessorProfileLazyImage";
import professoricon from "../../assests/professor-icon.jpg";
const Avatar = ({ profile, loading }) => {
  console.log(profile);
  const avatarRing = true;

  return (
    <div
      className="card shadow-lg compact bg-base-100 rounded-2xl"
      style={{ backgroundColor: "rgb(236,239,244)" }}
    >
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {ProfessorProfileSkeleton({
                widthCls: "w-full",
                heightCls: "h-full",
                shape: "",
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? "ring ring-primary ring-offset-base-100 ring-offset-2"
                  : ""
              }`}
            >
              {
                <LazyImage
                  src={professoricon}
                  alt={profile.professor_name}
                  placeholder={ProfessorProfileSkeleton({
                    widthCls: "w-fit",
                    heightCls: "h-fit",
                    shape: "",
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              ProfessorProfileSkeleton({ widthCls: "w-48", heightCls: "h-8" })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.professor_name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {loading || !profile
              ? ProfessorProfileSkeleton({ widthCls: "w-48", heightCls: "h-5" })
              : profile.college_name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
