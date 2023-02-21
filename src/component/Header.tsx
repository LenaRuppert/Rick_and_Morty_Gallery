import {Link} from "react-router-dom";
import "./Header.css";
export default function Header() {

    return (
        <header>
            <nav>

                    <button><Link to={"/"}>Home</Link></button>
                <button><Link to={"/characters"}>Characters</Link></button>
                    <button><Link to={"/episodes"}>Episodes</Link></button>

            </nav>
        </header>
    )
}