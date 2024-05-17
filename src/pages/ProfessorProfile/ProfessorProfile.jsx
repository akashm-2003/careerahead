import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Avatar from "../../components/ProfessorProfile/Avatar";
import BlogCard from "../../components/ProfessorProfile/BlogCard";
import ProfessorDetailsCard from "../../components/ProfessorProfile/ProfessorDetailsCard";
import SkillCard from "../../components/ProfessorProfile/SkillCard";
import {
  fetchProfessorById,
  fetchProfessorPublications,
} from "../../data/ProfessorByCollege";

const ProfessorProfile = ({
  onSetShowSidebar,
  showSidebar,
  selected,
  setSelected,
}) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const { profileId } = useParams();
  const fetchProfessor = async () => {
    setLoading(true);
    const data = await fetchProfessorById(profileId);

    setProfile(data);
    setLoading(false);

    setPublicationLoading(true);
    const data1 = await fetchProfessorPublications(
      profileId,
      data.college_name,
      25
    );
    setPublications(data1);
    setPublicationLoading(false);
  };

  const [showMore, setShowMore] = useState(false);
  const [publications, setPublications] = useState([]);
  const [publicationLoading, setPublicationLoading] = useState(true);

  const mainFunction = async () => {
    await fetchProfessor();
  };
  useEffect(() => {
    mainFunction();
  }, []);
  console.log(publications);
  return (
    // <>
    //   <Sidebar
    //     showSidebar={showSidebar}
    //     onSetShowSidebar={onSetShowSidebar}
    //     selected={selected}
    //     setSelected={setSelected}
    //   />
    //   <div className="flex w-full">
    //     <div className="smallerDevice-container"></div>
    //     <div className="main-container"></div>
    <>
      {!loading && (
        <HelmetProvider>
          <div className="fade-in h-screen ">
            <div
              className={`p-4 lg:p-10 min-h-full bg-base-300`}
              style={{ backgroundColor: "#E8FEFD" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <Avatar
                      profile={profile}
                      loading={loading}
                      // avatarRing={sanitizedConfig.themeConfig.displayAvatarRing}
                      // resumeFileUrl={sanitizedConfig.resume.fileUrl}
                    />
                    <ProfessorDetailsCard
                      profile={profile}
                      loading={loading}
                      // github={sanitizedConfig.github}
                      // social={sanitizedConfig.social}
                    />
                    <SkillCard loading={false} skills={profile?.interests} />
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {!publicationLoading ? (
                      <BlogCard
                        loading={publicationLoading}
                        publications={publications}
                        showMore={showMore}
                        setShowMore={setShowMore}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HelmetProvider>
      )}
    </>
    //   </div>
    // </>
  );
};

export default ProfessorProfile;
