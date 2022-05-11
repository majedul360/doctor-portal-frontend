import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/shared/header/Header";
import Appoinment from "./components/pages/appoinment/Appoinment";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;
