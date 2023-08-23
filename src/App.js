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
import Error404Page from './pages/Error404Page/Error404Page';
import SignUp from './pages/SignUp/SignUp';
function App() {

  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                showSidebar={showSidebar}
                onSetShowSidebar={onSetShowSidebar}
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
              />
            }
          />
          <Route path="/researchpaper" element={<ResearchPaper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/summarizer" element={<Summarizer />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
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