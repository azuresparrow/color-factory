import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Color.css';
function Color({hex, color}) {
    return (<div className="colorSample" style={{backgroundColor: hex}}>
        <p>{color}</p>
        <Link to="/">Back</Link>
    </div>);
}

export default Color;