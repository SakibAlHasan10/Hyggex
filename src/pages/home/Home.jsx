import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import HomeNav from "../../components/homeNav/HomeNav";
import { Outlet } from "react-router-dom";
import Faq from "../../components/faq/Faq";
import Published from "../../components/published/Published";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa6";
import { MdRefresh } from "react-icons/md";
import { RiFullscreenFill } from "react-icons/ri";
const Home = () => {
  return (
    <div className="mt-[72px] mb-16 px-8">
      <div className="flex mb-16 items-center gap-2 text-[#696671] text-lg font-medium">
        <GoHome className="w-[30px] h-[30px]" />
        <IoIosArrowForward className="text-[#06286E]" />
        <span>Flashcard</span>
        <IoIosArrowForward className="text-[#06286E]" />
        <span>Mathematics</span>
        <IoIosArrowForward className="text-[#06286E]" />
        <span className="text-lg font-semibold text-[#06286E]">
          Relation and Function
        </span>
      </div>
      <h2 className="text-[32px] font-bold bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </h2>

      <div className="mb-[46px] mt-[56px] mx-auto w-[470px]">
        <ul className="text-xl font-bold">
          <HomeNav />
        </ul>
      </div>
      <div className="w-[712px] mx-auto mb-[90px]">
        <div className="w-[712px] h-[393px] bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] mx-auto rounded-2xl mb-[32px] text-white text-[38px] font-bold ">
          <div>
            <div className="flex p-8 items-center justify-between text-4xl">
              <FaLightbulb />
              <HiMiniSpeakerWave />
            </div>
            <div className="flex items-center justify-center h-[200px]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="px-10 flex items-center justify-between text-2xl font-bold text-[#06286E]">
          <MdRefresh className="text-3xl" />
          <span className="w-[60px] h-[60px] rounded-full bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] text-white flex items-center justify-center">
            <IoIosArrowForward className="text-3xl" />
          </span>
          <h3>01/10</h3>{" "}
          <span className="w-[60px] h-[60px] rounded-full bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] text-white flex items-center justify-center">
            <IoIosArrowForward className="text-3xl" />
          </span>
          <RiFullscreenFill className="text-3xl" />
        </div>
      </div>
      <div className="mb-[141px]">
        <Published />
      </div>
      <Faq />
    </div>
  );
};

export default Home;
