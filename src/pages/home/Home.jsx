import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
    return (
        <div>
            <div className="flex items-center gap-2 text-[#696671] text-lg font-medium">
            <GoHome className="w-[30px] h-[30px]"/> 
            <IoIosArrowForward className="text-[#06286E]"/>
            <span>Flashcard</span> 
            <IoIosArrowForward className="text-[#06286E]"/>
            <span>Mathematics</span>
            <IoIosArrowForward className="text-[#06286E]"/>
            <span className="text-lg font-semibold text-[#06286E]">Relation and Function</span>
            </div>
            <h2 className="text-[32px] font-bold bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">Relations and Functions ( Mathematics )</h2>
        </div>
    );
};

export default Home;