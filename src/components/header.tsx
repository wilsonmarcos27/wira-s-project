import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div>
            <div className="flex justify-between">

            <div><h1>wilson portifolio</h1></div>
            <div>
                <nav className="space-x-8">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/portifolio"}>Portifolio</Link>
                    <Link to={"/sobre"}>Sobre</Link>
                   <Link to={"/contacto"}>Contacto</Link>
                
                </nav>
            </div>
                        </div>

        </div>
    )
}
