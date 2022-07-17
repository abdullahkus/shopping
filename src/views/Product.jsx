import React from 'react'
import { Box, Stack, Typography, Button, FormControlLabel, Radio } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../stores/cartSlice'
import { useFormik } from 'formik'
import { nanoid } from 'nanoid'
export default function Product() {
    let params = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.products.find(product => product.id === parseInt(params.collectionId)))
    const brands = useSelector(state => state.product.brands)
    const formik = useFormik({
        initialValues: {
            size: 's',
        },
    })

    function addCart() {
        const cart = {
            id: nanoid(),
            productId: product.id,
            size: formik.values.size,
        }
        dispatch(addToCart(cart))
    }

    return <Box>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ p: 3 }} spacing={4}>
            <Box>
                <img
                    height="412"
                    src={product.img}
                    alt="green iguana"
                />
            </Box>
            <Stack direction="column" justifyContent="center">
                <Typography gutterBottom variant="h3" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brands.find(x => x.id === product.brandId).name}
                </Typography>
                <Typography variant="h5" color="text.primary">
                    ${product.price}
                </Typography>
                <Box sx={{ mt: 5 }} >
                    <Typography variant="h5" color="text.primary">
                        Select Size {formik.touched.size && formik.errors.size}
                    </Typography>
                    <Stack direction="row">
                        <FormControlLabel
                            control={<Radio />}
                            name="size"
                            checked={formik.values.size === 's'}
                            onChange={formik.handleChange}
                            value="s"
                            label="S"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            name="size"
                            checked={formik.values.size === 'm'}
                            onChange={formik.handleChange}
                            value="m"
                            label="M"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            name="size"
                            checked={formik.values.size === 'l'}
                            onChange={formik.handleChange}
                            value="l"
                            label="L"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            name="size"
                            checked={formik.values.size === 'xl'}
                            onChange={formik.handleChange}
                            value="xl"
                            label="XL"
                        />
                    </Stack>
                    <Button type="submit" onClick={addCart} variant="contained" sx={{ mt: 2, width: '150px', height: '50px', background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))' }} >Add to Cart</Button>
                </Box>
            </Stack>
        </Stack>
    </Box>
}
