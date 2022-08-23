import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Contact from './pages/Contact';
=======
import Project from "./pages/Project"
>>>>>>> 2f41010a15716bb00e9e3323c2ebca7475e8d6f0
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
=======
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
>>>>>>> 2f41010a15716bb00e9e3323c2ebca7475e8d6f0
        </Routes>
      </Router>
    </div>
  );
}
export default App;
