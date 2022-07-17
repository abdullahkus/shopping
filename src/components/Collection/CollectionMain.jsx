import React from 'react'
import { useSelector } from 'react-redux'

import Product from './Product'
import { Stack } from '@mui/material'

export default function CollectionMain({ brandFilter, categoryFilter, order }) {
    const products = useSelector((state) => state.product.products)
    const categories = useSelector(state => state.product.categories)
    const brands = useSelector(state => state.product.brands)
    let filteredProducts
    filteredProducts = brandFilter.length > 0
        ? [...products].filter(product => brandFilter.includes(String(product.brandId)))
        : [...products]
    filteredProducts = categoryFilter.length > 0
        ? filteredProducts.filter(product => categoryFilter.includes(String(product.categoryId)))
        : filteredProducts
    if (order === 'default') {
        filteredProducts = filteredProducts.sort((a, b) => a.id - b.id)
    } else if (order === 'highToLow') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
    } else if (order === 'lowToHigh') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
    }

    return (
        <Stack direction="row" flexWrap="wrap">
            {
                filteredProducts.map((product, index) => {
                    return <Product key={index} product={product} brands={brands} categories={categories} />
                })
            }
        </Stack>
    )
}
