import React from "react";
import { Input } from "./Input";

export default {
    title : "React-Storybook/UI/Controls/Inputs/Input",
    component : Input,
};

export const Small = () => ( <Input size="small" placeHolder="Small Size"/>);
export const Medium = () => ( <Input size="medium" placeHolder="Medium Size"/>);
export const Large = () => ( <Input size="large" placeHolder="Large Size"/>);


Small.storyName = "Small-Input";
Medium.storyName = "Medium-Input";
Large.storyName = "Large-Input";