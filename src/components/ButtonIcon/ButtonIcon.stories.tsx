import React from 'react';
import { Meta, Story } from "@storybook/react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default {
    title: "Material-UI/Button-Icons",
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



export const DeleteIconBtn = () => <Box sx={{margin: 4}}><IconButton aria-label="delete"><DeleteIcon /></IconButton></Box>;
export const AlarmIconBtn = () => <Box sx={{margin: 4}}><IconButton color="secondary" aria-label="add an alarm"><AlarmIcon /></IconButton></Box>;
export const AddShoppingCartIconBtn = () => <Box sx={{margin: 4}}><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></Box>;
