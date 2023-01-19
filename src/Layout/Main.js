import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <Box>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Main;