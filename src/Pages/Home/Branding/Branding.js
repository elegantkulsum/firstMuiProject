import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
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
   
            <Stack direction={{ xs: 'column', sm: 'column',md:'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }} >
                <Box sx={{

                }}
                    spacing={5}>
                    <Typography sx={{ fontSize: '2.8rem', fontWeight: 'bold', lineHeight: 1.2 }} > Let's Grow your <br /> Brand To The <br /> Next Level </Typography>
                    <Typography> Lorem ipsum dolor sit amet  consectetur adipisicing <br /> elit Magni  expedita assumenda harum <br /> numquam laborum explicabo. </Typography>
                    <Button sx={{ width: '30%', fontSize: '1rem' }} variant='contained'>Hire Us</Button>
                </Box>

                <Box sx={{
                    width: '50%',

                }}
                >
                    <img src="https://i.ibb.co/VDbCsqd/banner.png" alt="banner" style={{ width: '100%' }} ></img>
                </Box>
            </Stack>
        </BrandingWrapper>
    );
};

export default Branding;