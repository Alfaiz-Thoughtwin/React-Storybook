import React from "react";
import "./Button.css";
import styled from "styled-components";

interface IProps {
  variant?: any;
  children?: any;
  disabled?: boolean;
}

interface IBtn {
  button?: any;
  variant?: any;
}

// export const Btn = styled.button<IBtn>`
//   ${({ button }) =>
//     button &&
//     `
//       border : none;
//       color : white;
//       padding : 15px 32px;
//       text-align: center;
//       text-decoration: none;
//       display : inline-block;
//       font-size: 16px;
//       border-radius: 4px;
//       cursor: pointer;
// `};
// `;

export const Btn = styled.button``;

export const Button = (props: IProps) => {
  const { variant, children, ...rest } = props;
  
  return (
    <Btn className={`button ${variant}`} {...rest}>
      {children}
    </Btn>
  );
};
