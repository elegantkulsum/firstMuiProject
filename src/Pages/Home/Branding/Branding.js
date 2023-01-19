import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { display } from '@mui/system';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122,178,89,0.15)',
    padding: ' 4rem',
    margin: '4rem 0',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))
const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack sx={{
               
                display:{
                    xs:'100%',
                    sm:'100%',
                    md:'100%'
                }
            }}
                spacing={5}>
                <Typography sx={{ fontSize: '2.8rem', fontWeight: 'bold', lineHeight: 1.2 }} > Let's Grow your <br /> Brand To The <br /> Next Level </Typography>
                <Typography> Lorem ipsum dolor sit amet  consectetur adipisicing <br /> elit Magni  expedita assumenda harum <br /> numquam laborum explicabo. </Typography>
                <Button sx={{ width: '30%', fontSize: '1rem' }} variant='contained'>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '50%',
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block'
                }
            }}
            >
                <img src="https://i.ibb.co/VDbCsqd/banner.png" alt="banner" style={{ width: '100%' }} ></img> </Box>
        </BrandingWrapper>
    );
};

export default Branding;