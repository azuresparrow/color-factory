import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./ColorForm.css";

function ColorForm({addNewColor}) {
    const [formData, updateFormData] = useState({name:"", hex:"#FFF"})
    const history = useHistory();

    const {hex, name} = formData;

    const handleChange = (e) => {
        e.persist();
        updateFormData(form => ({...form, [e.target.name]:e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addNewColor({[name]: hex})
        history.push("/colors");
    }
    
    const divStyle = { backgroundColor: hex }

    return (
        <div className="colorForm" style={divStyle} >
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder= "name your new color" onChange={handleChange} value={name}></input>
            <input type="color" id="hex" name="hex" value={hex} placeholder="#FFFFFF" onChange={handleChange} ></input>
            <input type="submit" value="Add" readOnly/>
        </form>
        </div>
    );
}

export default ColorForm;