import React from "react";
import { Meta } from "@storybook/react";
import { Input } from "./Input";
import { Center } from '../center';

export default {
    title : "React-Storybook/UI/Controls/Inputs/Input",
    component : Input,
    decorators: [story => <Center>{ story() }</Center>],
} as Meta;

export const Small = () => ( <Input size="small" placeHolder="Small Size"/>);
export const Medium = () => ( <Input size="medium" placeHolder="Medium Size"/>);
export const Large = () => ( <Input size="large" placeHolder="Large Size"/>);


Small.storyName = "Small-Input";
Medium.storyName = "Medium-Input";
Large.storyName = "Large-Input";
