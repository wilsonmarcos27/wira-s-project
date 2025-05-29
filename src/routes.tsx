import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";

export const route = createBrowserRouter([
{
    path: "/",
    element: <Home/>,
},
{
    path:"/sobre",
    element: <Sobre/>,
},
])