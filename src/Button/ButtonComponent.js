import React from "react";
import { memo } from "react";
import './ButtonComponent.css';

const  Button = ({text, onClick}) =>{
    return <button onClick={onClick} className="button_element">{text}</button>;
} 

export default memo(Button);