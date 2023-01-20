import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
const services = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/KGkRkf4/color-palette-1.png',
    'https://i.ibb.co/MfFxgqc/coding-1.png'
]
const Services = () => {
    return (
       <Box>
          <SectionTitle title="provide awesome" colored="Services"></SectionTitle>
       </Box>
    );
};

export default Services;