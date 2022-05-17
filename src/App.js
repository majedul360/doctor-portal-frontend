import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/shared/header/Header";
import Appoinment from "./components/pages/appoinment/Appoinment";
import Registar from "./components/pages/registar/Registar";
import Login from "./components/pages/login/Login";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import MyAppoinment from "./components/pages/dashboard/myAppoinment/MyAppoinment";
import MyReviews from "./components/pages/dashboard/myReviews/MyReviews";
import Users from "./components/pages/dashboard/users/Users";
import RequireAdmin from "./requireAdmin/RequireAdmin";
import Doctors from "./components/pages/dashboard/doctors/Doctors";
import ManageDoctors from "./components/pages/dashboard/manageDoctors/ManageDoctors";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinment />} />
          <Route path="reviews" element={<MyReviews />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="doctors"
            element={
              <RequireAdmin>
                <Doctors />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-doctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
