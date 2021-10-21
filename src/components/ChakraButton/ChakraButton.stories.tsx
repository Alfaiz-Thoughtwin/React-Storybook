import React from 'react';
import { Meta, Story } from "@storybook/react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default {
    title: "Material-UI/Button",
    component: Button,
} as Meta;


export const Inherit = () => <Box sx={{margin: 4}}><Button variant="contained" color="inherit">Inherit Button</Button></Box>;
export const Primary = () => <Box sx={{margin: 4}}><Button variant="contained" color="primary">Primary Button</Button></Box>;
export const Secondary = () => <Box sx={{margin: 4}}><Button variant="contained" color="secondary">Secondary Button</Button></Box>;
export const Success = () => <Box sx={{margin: 4}}><Button variant="contained" color="success">Success Button</Button></Box>;
export const Error = () => <Box sx={{margin: 4}}><Button variant="contained" color="error">Error Button</Button></Box>;
export const Info = () => <Box sx={{margin: 4}}><Button variant="contained" color="info">Info Button</Button></Box>;
export const Warning = () => <Box sx={{margin: 4}}><Button variant="contained" color="warning">Warning Button</Button></Box>;