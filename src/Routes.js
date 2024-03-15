import React, {useState, useEffect} from "react";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import ColorForm from "./ColorForm";

const Routes = () => {
    const [colors, updateColors] = useState({ "foam": "#56bd9c", "magenta": "#ff09d5", "sky": "#86d8ff"});

    const handleAddColor = (newColor) => {
        updateColors(oldColors => ({...oldColors, ...newColor}));
    };

    const chosenColorComponent = (props) => {
        const { color } = props.match.params;
        const hex = colors[color];
        console.log("why");
        return <Color hex={hex} color={color}/>;
    }

    return (
    <Switch>
        <Route exact path="/colors">
            <ColorList colors={colors}></ColorList>
            
        </Route>
        <Route exact path="/colors/new">
            <ColorForm addNewColor={handleAddColor}></ColorForm>
        </Route>
        <Route exact path="/colors/:color" render={chosenColorComponent}/>
        <Redirect to="/colors"></Redirect>
    </Switch>
    );
}

export default Routes;