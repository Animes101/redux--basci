import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      
      {/* Logo */}
      <div className="text-xl font-bold">MyApp</div>

      {/* Links */}
      <div className="flex gap-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/user"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
          }
        >
          User
        </NavLink>
        <NavLink
          to="/comment"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
          }
        >
          Comment
        </NavLink>

      </div>
    </nav>
  );
};

export default NavBar;