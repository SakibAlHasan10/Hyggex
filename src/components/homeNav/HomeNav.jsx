import { NavLink } from "react-router-dom";

const nav = (
  <>
    <NavLink
      to={"/study"}
      className={({ isActive, isPending }) =>
        isActive ? "active border-b-2 pb-1 border-[#06286E] text-[#06286E] font-bold" : isPending ? "pending" : ""
      }
    >
      <li>Study</li>
    </NavLink>
    <NavLink
      to={"/quiz"}
      className={({ isActive, isPending }) =>
        isActive ? "active border-b-2 pb-1 border-[#06286E] text-[#06286E] font-bold" : isPending ? "pending" : ""
      }
    >
      <li>Quiz</li>
    </NavLink>
    <NavLink
      to={"/test"}
      className={({ isActive, isPending }) =>
        isActive ? "active border-b-2 pb-1 border-[#06286E] text-[#06286E] font-bold" : isPending ? "pending" : ""
      }
    >
      <li>Test</li>
    </NavLink>
    <NavLink
      to={"/game"}
      className={({ isActive, isPending }) =>
        isActive ? "active border-b-2 pb-1 border-[#06286E] text-[#06286E] font-bold" : isPending ? "pending" : ""
      }
    >
      <li>Game</li>
    </NavLink>
    <NavLink
      to={"/others"}
      className={({ isActive, isPending }) =>
        isActive ? "active border-b-2 pb-1 border-[#06286E] text-[#06286E] font-bold" : isPending ? "pending" : ""
      }
    >
      <li>Others</li>
    </NavLink>
  </>
);

const HomeNav = () => {
  return (
    <div>
      <div className="">
        <ul className="menu menu-horizontal px-1 text-xl font-medium text-[#696671] flex justify-between items-center">
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default HomeNav;
