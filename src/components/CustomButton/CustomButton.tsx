import React from 'react';
import './CustomButton.css';


interface IProps {
  variant?: any;
  children?: any;
}


export const CustomButton = (props: IProps) => {

  const { variant, children, ...rest } = props;

    return (
        <>
          <button className={`button ${variant}`} {...rest} >{ children }</button>
        </>
    )
}
