import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Works from "./screens/Works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
