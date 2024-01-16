import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import Study from "../pages/home/Study";
import Flashcard from "../pages/Flashcard/Flashcard";
import Contact from "../pages/contact/Contact";
import Quiz from "../pages/home/Quiz";
import Test from "../pages/home/Test";
import Game from "../pages/home/Game";
import Others from "../pages/home/Others";

const router = createBrowserRouter([
{
    path:"/",
    element:<Root/>,
    children:[
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/study",
                    element:<Study/>
                },
                {
                    path:"/quiz",
                    element:<Quiz/>
                },
                {
                    path:"/test",
                    element:<Test/>
                },
                {
                    path:"/game",
                    element:<Game/>
                },
                {
                    path:"/others",
                    element:<Others/>
                }

            ]
        },
        {
            path:"/flashcard",
            element:<Flashcard/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
    ]
}
])

export default router;