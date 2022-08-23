import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project"
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
