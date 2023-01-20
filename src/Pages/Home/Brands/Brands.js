import { Box, Grid, styled } from '@mui/material';
import React from 'react';


const brands = [
    'https://i.ibb.co/hL2ZWCv/image-5.png',
    'https://i.ibb.co/LpXZb99/image-6.png',
    'https://i.ibb.co/9V11xgC/image-7.png',
    'https://i.ibb.co/Rj07YwP/image-8.png',
    'https://i.ibb.co/gdxjYJp/image-9.png'
]

const BrandsWrapper = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    '& > img':{height:'60px'},
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        '& > img':{
            margin:'10px 0px'
        }
    }
    
}))

const Brands = () => {
    return (
        <BrandsWrapper>
    
            {
                brands.map((brand, i)=> <img key={i} src={brand} alt=""  /> )
            }
        </BrandsWrapper>
//         <Grid container justifyContent="center"
//         alignItems="center" spacing={2}>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
//             <Grid item xs={6} sm={2} md={2} lg={2} > <img src="https://i.ibb.co/hL2ZWCv/image-5.png" alt="" style={{width:'120px', height:'100px'}} /> 
//             </Grid>
// {/*           
//                  {
//                     brands.map((brand, i)=> <Grid item xs={2} sm={2} md={2} lg={2} > <img key={i} src={brand} alt="" style={{width:'120px', height:'100px'}} /> </Grid>)
//                  } */}
    
//         </Grid>
        
    );
};

export default Brands;