import React from "react";
import "./Input.css";

interface IProps {
    size?:any;
    placeHolder:any;
};

export const Input = (props:IProps) => {

    const { size="medium", ...rest } = props;

  return <input className={`input ${size}`} {...rest}/>
};
