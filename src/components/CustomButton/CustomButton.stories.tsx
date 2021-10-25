import React from 'react';
import { Meta, Story } from "@storybook/react";
import { action, actions } from '@storybook/addon-actions';
import { CustomButton } from './CustomButton';
import { width } from '@mui/system';



export default {
    title: "Custom-Button/Button",
    component: CustomButton,
    argTypes : {
        variant : { control: "text"},
        children: { control : "text"}
    },
} as Meta;


const Template:Story = (args:any):any => <CustomButton { ...actions("onClick", "onMouseOver") } {...args} />

export const Custom1 = Template.bind({});
Custom1.args = {
    children : "Custom 1",
    style : {
        width : "300px",
    },
}
