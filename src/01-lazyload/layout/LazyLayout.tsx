import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { About, Home, Users } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="users"
          >
            Users
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
