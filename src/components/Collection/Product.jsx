import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Product({ product, brands }) {
    return <Link style={{ textDecoration: 'none' }} to={`/collections/${product.id}`}>
        <Card sx={{ width: 275, m: 1 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="345"
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {brands.find(x => x.id === product.brandId).name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>
}
