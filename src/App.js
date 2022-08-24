import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Project from "./pages/Project"
import { NavBar } from './components/NavBar';
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
