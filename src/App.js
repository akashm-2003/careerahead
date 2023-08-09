import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login';
import Professor from './pages/Professor/Professor';
import ResearchPaper from './pages/ResearchPaper/ResearchPaper';
import Profile from './pages/Profile/Profile';
import Summarizer from './pages/Summarizer/Summarizer';
import About from './pages/About/About';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Dashboard /></>,
    },
    {
      path: "/login",
      element: <><Login /></>,
    },
    {
      path: "/professor",
      element: <><Professor /></>,
    },
    {
      path: "/researchpaper",
      element: <><ResearchPaper /></>,
    },
    {
      path: "/profile",
      element: <><Profile /></>,
    },
    {
      path: "/summarizer",
      element: <><Summarizer /></>,
    },
    {
      path: "/about",
      element: <><About /></>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
