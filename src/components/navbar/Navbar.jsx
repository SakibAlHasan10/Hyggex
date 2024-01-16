import { NavLink } from "react-router-dom";
import logo from "../../assets/Component-40.png";
const nav = (
  <>
    <NavLink to={"/"}>
      <li>Home</li>
    </NavLink>
    <NavLink to={"/flashcard"}>
      <li>Flashcard</li>
    </NavLink>
    <NavLink to={"/contact"}>
      <li>Contact</li>
    </NavLink>
    <NavLink to={"/faq"}>
      <li>FAQ</li>
    </NavLink>
    <NavLink to={""} className={""}>
      <button className="text-lg font-medium text-white bg-gradient-to-b h-[48px] text-center w-[120px] from-[#06286E] to-[#164EC0] rounded-3xl">Login</button>
    </NavLink>
  </>
);
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl w-[191px] h-[39px]"><img src={logo} alt="" /></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-lg font-normal items-center">
            {nav}
                
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
