import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Portifolio from "./pages/portifolio";

export const route = createBrowserRouter([
{
    path: "/",
    element: <Home/>,
},
{
    path:"/sobre",
    element: <Sobre/>,
},
{
    path: "/portifolio",
    element: <Portifolio/>,
}
])