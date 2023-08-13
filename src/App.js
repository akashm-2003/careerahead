import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Professor from './pages/Professor/Professor';
import ResearchPaper from './pages/ResearchPaper/ResearchPaper';
import Profile from './pages/Profile/Profile';
import Summarizer from './pages/Summarizer/Summarizer';
import About from './pages/About/About';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import { ThemeProvider } from "styled-components";
import Scholarship from './pages/Scholarship/Scholarship';
function App() {

  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <>
        <Router>
          <div className="flex">
            <Sidebar onSidebarHide={() => { onSetShowSidebar(false); }} showSidebar={showSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard onSidebarHide={() => { onSetShowSidebar(true); }} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/professor" element={<Professor />} />
              <Route path="/researchpaper" element={<ResearchPaper />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/summarizer" element={<Summarizer />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
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