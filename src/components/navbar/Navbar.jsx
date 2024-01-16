import { NavLink } from 'react-router-dom';
import logo from '../../assets/Component-40.png'
const nav =<>
<NavLink to={"/"}>
    <li>Home</li>
</NavLink>
<NavLink to={"/flashcard"}>
    <li>Flashcard</li>
</NavLink>
<NavLink to={"/contact"}>
    <li>Contact</li>
</NavLink>
</>
const Navbar = () => {
    return (
        <div className="w-full bg-white flex items-center justify-between">
            <div>
                
            <img src={logo} alt="hyggex-logo" />
            </div>
            <div>
                <ul className='flex items-center gap-10 text-lg font-normal'>
                    {nav}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;