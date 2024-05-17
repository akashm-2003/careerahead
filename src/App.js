import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error404Page from "./pages/Error404Page/Error404Page";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Professor from "./pages/Professor/Professor";
import ProfessorProfile from "./pages/ProfessorProfile/ProfessorProfile";
import Profile from "./pages/Profile/Profile";
import Publication from "./pages/Publication/Publication";
import ResearchPaper from "./pages/ResearchPaper/ResearchPaper";
import Scholarship from "./pages/Scholarship/Scholarship";
import SignUp from "./pages/SignUp/SignUp";
import Summarizer from "./pages/Summarizer/Summarizer";
import CreateSponsorship from "./pages/RegisterDetails/RegisterDetails";
import "react-toastify/dist/ReactToastify.css";
// test comment
function App() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [selected, setSelected] = useState("0");
  return (
    <>
      <SkeletonTheme highlightColor="lightblue" baseColor="#888">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  showSidebar={showSidebar}
                  onSetShowSidebar={onSetShowSidebar}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/professor"
              element={
                <Professor
                  showSidebar={showSidebar}
                  onSetShowSidebar={onSetShowSidebar}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
            <Route
              path="/researchpaper"
              element={
                <ResearchPaper
                  showSidebar={showSidebar}
                  onSetShowSidebar={onSetShowSidebar}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/summarizer" element={<Summarizer />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/publication" element={<Publication />} />
            <Route path='/registerDetails' element={<CreateSponsorship />} />
            <Route
              path="/college/:collegeId/professorprofile/:profileId"
              element={
                <ProfessorProfile
                  showSidebar={showSidebar}
                  onSetShowSidebar={onSetShowSidebar}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
            <Route
              path="/college/:collegeId/professorprofile/:profileId/pub/:pubId" 
              element={<Publication />}
            />
            {/* <Route path="/college/">
              <Route path=":collegeId">
                <Route path="/professorprofile/">
                  <Route
                    path=":profileId"
                  >
                    <Route path="/publication/">
                      <Route path=":publicationId" element={<Publication />} />
                    </Route>
                    <Route path="/" element={
                      <ProfessorProfile
                        showSidebar={showSidebar}
                        onSetShowSidebar={onSetShowSidebar}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    } />
                  </Route>
                </Route>
              </Route>
            </Route> */}

            <Route
              path="*"
              element={
                <Error404Page
                  onSidebarHide={() => {
                    onSetShowSidebar(true);
                  }}
                />
              }
            />
          </Routes>
        </Router>
      </SkeletonTheme>
    </>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Dashboard /></>,
//   },
//   {
//     path: "/login",
//     element: <><Login /></>,
//   },
//   {
//     path: "/professor",
//     element: <><Professor /></>,
//   },
//   {
//     path: "/researchpaper",
//     element: <><ResearchPaper /></>,
//   },
//   {
//     path: "/profile",
//     element: <><Profile /></>,
//   },
//   {
//     path: "/summarizer",
//     element: <><Summarizer /></>,
//   },
//   {
//     path: "/about",
//     element: <><About /></>,
//   },
// ]);
