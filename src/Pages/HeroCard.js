import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const HeroCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p:2 }}>
            <CardMedia
                sx={{ height: 250,borderRadius:2 }}
                image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="green iguana"
            />
            <CardContent sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </Box>
                <IconButton sx={{border:'1px solid #ccc', fontWeight:'bold'}}>
                    <AddIcon  sx={{ fontWeight:'normal'}}/>
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default HeroCard;