import React from "react";
import ReactDOM from 'react-dom'; 
import { IoTabletLandscape } from "react-icons/io5";
import BackButton from "../BackButton"

it("Renders without crashing", () => { 
    const div = document.createElement('div'); 
    ReactDOM.render(<BackButton></BackButton>, div)
})
 