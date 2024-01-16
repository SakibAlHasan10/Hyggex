import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import HomeNav from "../../components/homeNav/HomeNav";
import { Outlet } from "react-router-dom";
import Faq from "../../components/faq/Faq";
import Published from "../../components/published/Published";
const Home = () => {
    return (
        <div className="mt-[72px] mb-16">
            <div className="flex mb-16 items-center gap-2 text-[#696671] text-lg font-medium">
            <GoHome className="w-[30px] h-[30px]"/> 
            <IoIosArrowForward className="text-[#06286E]"/>
            <span>Flashcard</span> 
            <IoIosArrowForward className="text-[#06286E]"/>
            <span>Mathematics</span>
            <IoIosArrowForward className="text-[#06286E]"/>
            <span className="text-lg font-semibold text-[#06286E]">Relation and Function</span>
            </div>
            <h2 className="text-[32px] font-bold bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">Relations and Functions ( Mathematics )</h2>

            <div className="mb-[46px] mt-[56px] mx-auto w-[470px]">
                <ul>
                <HomeNav/>
                </ul>
            </div>
            <div className="w-[712px] h-[393px] bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] mx-auto rounded-2xl mb-[90px] flex items-center justify-center text-white ">
                <div>

                <Outlet/>
                </div>
            </div>
            <div className="mb-[141px]">
                <Published/>
            </div>
            <Faq/>
        </div>
    );
};

export default Home;