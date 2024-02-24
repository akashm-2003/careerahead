import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login/Login';
import Professor from './pages/Professor/Professor';
import ResearchPaper from './pages/ResearchPaper/ResearchPaper';
import Profile from './pages/Profile/Profile';
import Summarizer from './pages/Summarizer/Summarizer';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Scholarship from './pages/Scholarship/Scholarship';
import Error404Page from './pages/Error404Page/Error404Page';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Logout from './pages/Logout/Logout';
import Publication from './pages/Publication/Publication';
function App() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [selected, setSelected] = useState("0");
  return (
    <>
      <SkeletonTheme highlightColor="lightblue" baseColor='#888'>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/professor" element={<Professor showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected}/>}/>
            <Route path="/researchpaper" element={<ResearchPaper showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/summarizer" element={<Summarizer />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/publication" element={<Publication />} />            
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