import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Myself from "./pages/Myself";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectsList from "./pages/Projects/ProjectsList";
import Project from "./pages/Projects/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route caseSensitive path="/about" element={<About />}>
            {/* Nested Routes */}
            <Route path="me" element={<Myself />} />
            <Route path="projects" element={<ProjectsList />}>
              {/* Dynamic Segments */}
              <Route path=":project" element={<Project />} />
            </Route>
          </Route>
          {/* <Route path="/about/me" element={<Myself />} /> */}
          {/* <Route path="/about/projects" element={<ProjectsList />} /> */}
          {/* <Route path="/about/projects/:project" element={<Project />} /> */}
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default Portfolio;
