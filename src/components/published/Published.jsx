import published from '../../assets/Frame 41.png'
import create from '../../assets/Frame.png'
const Published = () => {
    return (
        <div className='flex items-center justify-between'>
            <img src={published} alt="" className='h-[110px] -ml-7 w-[217px]'/>
            <div className='flex items-center'>
                <img src={create} alt="" className='w-[60px] h-[60px]'/>
                <h3 className='text-[28px] font-semibold bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text'>Create Flashcard</h3>
            </div>
        </div>
    );
};

export default Published;