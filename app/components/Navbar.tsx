import {useState} from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes,FaBars } from "react-icons/fa";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-normal transition-colors",
    isActive ? "text-gray-500" : " hover:text-white hover:text-lg hover:transition-all",
  ].join(" ");

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/60 bg-[#1b2230]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 text-lg font-semibold text-slate-200"
          end
        >
          <span className="text-xl text-sky-400">
            <FaLaptopCode />
          </span>
          <span>Dev</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClassName} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClassName}>
            Projects
          </NavLink>
          <NavLink to="/blogs" className={linkClassName}>
            Blog
          </NavLink>
          <NavLink to="/about" className={linkClassName}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClassName}>
            Contact
          </NavLink>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick = {() => setMenuOpen(!menuOpen)} className = "text-blue-400 text-xl" title = "menu">
            { menuOpen ? <FaTimes className = "hover:cursor-pointer"/> : <FaBars  className = "hover:cursor-pointer"/>}
          </button>
        </div>

      </div>

      {/* mobile nav */}

      {
        menuOpen && (
          <div className="bg-gray-800 border-t border gray-700 px-6 py-4 space-x-2 space-y-4 text-center md:hidden">
            <NavLink to="/" className={linkClassName} onClick = {() => setMenuOpen=(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClassName} onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/blogs" className={linkClassName} onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/about" className={linkClassName} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClassName} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          </div>
        )
      }
    </nav>
  );
};

export default NavBar;
