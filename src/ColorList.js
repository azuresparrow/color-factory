import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ColorList.css"
import ColorForm from "./ColorForm";

function ColorList({colors, favorite}) {
    const links = Object.keys(colors).reverse().map(c => (<li key={c}>
        <Link to={`/colors/${c}`}>{c}</Link>
    </li>)) 

    return (
        <div className="ColorList">
            <ul>
                {links}
            </ul>
            <Link to="/colors/new">Add Color</Link>
        </div>
    
    ) 
}

export default ColorList;