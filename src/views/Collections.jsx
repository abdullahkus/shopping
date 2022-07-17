import React, { useState } from 'react'
import CollectionHead from '../components/Collection/CollectionHead'
import CollectionMain from '../components/Collection/CollectionMain'

import Sidebar from '../components/Collection/Sidebar'
import { Container, Stack, Box } from '@mui/material'

export default function Collections() {
    const [sort, setSort] = useState(false);
    const sortOpen = () => {
        setSort(true);
    };
    const sortClose = () => {
        setSort(false);
    };

    const [filter, setFilter] = useState(false);
    const filterOpen = () => {
        setFilter(true);
    };
    const filterClose = () => {
        setFilter(false);
    };

    const [brandFilter, setBrandFilter] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([])
    const [order, setOrder] = useState('default')

    return <Container maxWidth="xl">
        <Stack direction="row" sx={{ p: 2 }}>
            <Box flex={1} display={{ xs: 'none', md: 'block' }}>
                <Sidebar filter={filter} filterOpen={filterOpen} filterClose={filterClose} brandFilter={brandFilter} setBrandFilter={setBrandFilter} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
            </Box>
            <Box flex={4}>
                <CollectionHead sort={sort} sortOpen={sortOpen} sortClose={sortClose} filterOpen={filterOpen} setOrder={setOrder} />
                <CollectionMain brandFilter={brandFilter} categoryFilter={categoryFilter} order={order} />
            </Box>
        </Stack>
    </Container>
}
