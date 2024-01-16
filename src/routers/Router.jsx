import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import Study from "../pages/home/Study";

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
                }
            ]
        }
    ]
}
])

export default router;