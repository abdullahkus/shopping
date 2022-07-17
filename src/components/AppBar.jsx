import React from 'react'

import Logo from '../assets/icons/Logo'
import { AppBar, Box, Stack, Toolbar, Typography, Container } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom'

export default function Appbar() {
    return <Container maxWidth="xl">
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
                component={Stack}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ height: '72px' }}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Box display="flex" alignItems="center">
                        <Logo />
                        <Typography variant="h6" color="initial" sx={{ px: 1 }}>
                            Shopping
                        </Typography>
                    </Box>
                </Link>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to="/cart">
                        <LocalMallOutlinedIcon />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >
    </Container >
}
