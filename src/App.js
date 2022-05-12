import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/shared/header/Header";
import Appoinment from "./components/pages/appoinment/Appoinment";
import Registar from "./components/pages/registar/Registar";
import Login from "./components/pages/login/Login";
import RequireAuth from "./components/requireAuth/RequireAuth";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
