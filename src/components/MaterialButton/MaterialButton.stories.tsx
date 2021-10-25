import React from 'react';
import { Meta, Story } from "@storybook/react";
import { action, actions } from '@storybook/addon-actions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default {
    title: "Material-UI/Button",
    component: Button,
    argTypes: {
        variant: {control : "text"},
        size: {
            options : ["small", "medium", "large"],
            control : { type: "radio" },
        },
        color: { 
            options : ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
            control : { type: "radio" },
         },
        children: { control : "text"},
        onClick: { action: "Clicked"},
    },
} as Meta;




//=============================================================================================================================
//==========================================  Approach 1  =====================================================================
//=============================================================================================================================
// export const Inherit = () => <Box sx={{margin: 4}}><Button variant="contained" color="inherit">Inherit Button</Button></Box>;
// export const Primary = () => <Box sx={{margin: 4}}><Button variant="contained" color="primary">Primary Button</Button></Box>;
// export const Secondary = () => <Box sx={{margin: 4}}><Button variant="contained" color="secondary">Secondary Button</Button></Box>;
// export const Success = () => <Box sx={{margin: 4}}><Button variant="contained" color="success">Success Button</Button></Box>;
// export const Error = () => <Box sx={{margin: 4}}><Button variant="contained" color="error">Error Button</Button></Box>;
// export const Info = () => <Box sx={{margin: 4}}><Button variant="contained" color="info">Info Button</Button></Box>;
// export const Warning = () => <Box sx={{margin: 4}}><Button variant="contained" color="warning">Warning Button</Button></Box>;







//=============================================================================================================================
//==========================================  Approach 2  =====================================================================
//=============================================================================================================================
const Template: Story = (args:any):any => <Box sx={{margin: 4}}><Button onClick={action("Click Handler")} {...args}/></Box>;

export const Inherit = Template.bind({});
Inherit.args = {
    variant:"contained",
    color:"inherit",
    children:"Inherit Button"
};

export const Primary = Template.bind({});
Primary.args = {
    variant:"contained",
    color:"primary",
    children:"Primary Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant:"contained",
    color:"secondary",
    children:"Secondary Button"
};

export const Success = Template.bind({});
Success.args = {
    variant:"contained",
    color:"success",
    children:"Success Button"
};

export const Error = Template.bind({});
Error.args = {
    variant:"contained",
    color:"error",
    children:"Error Button"
};

export const Info = Template.bind({});
Info.args = {
    variant:"contained",
    color:"info",
    children:"Info Button"
};

export const Warning = Template.bind({});
Warning.args = {
    variant:"contained",
    color:"warning",
    children:"Warning Button"
};
