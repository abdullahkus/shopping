import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../stores/cartSlice'
import { useNavigate } from 'react-router'
export default function Cart() {
    const cart = useSelector(state => state.cart.cart)
    const products = useSelector(state => state.product.products)
    const brands = useSelector(state => state.product.brands)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    let total = 0
    function placeOrder() {
        if (cart.length > 0) {
            dispatch(clearCart())
            navigate("/")
        }

    }
    return (
        <Stack sx={{ mt: 3 }} direction="row" justifyContent="center" spacing={3}>
            <Stack>
                <Typography sx={{ mb: 2 }} variant="h6" color="initial">Cart ({cart.length} items)</Typography>
                {
                    cart.map((oneCart, index) => {
                        const product = products.find(product => product.id === oneCart.productId)
                        const brand = brands.find(brand => brand.id === product.brandId)
                        total += product.price
                        return (
                            <Stack key={index} sx={{ mb: 1, border: '1px solid #eeeeee', p: 1, width: '420px' }} direction="row" spacing={1}>
                                <Box sx={{ width: '110px', height: '138px' }}>
                                    <img width="110" height="138" src={product.img} alt={product.name} />
                                </Box>
                                <Stack direction="column">
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {brand.name}
                                    </Typography>
                                    <Stack direction="row">
                                        <Box sx={{ backgroundColor: '#eeeeee', mt: 1, borderRadius: 1, p: '2px 5px' }}>
                                            <Typography variant="body2">Size: {oneCart.size.toUpperCase()}</Typography>
                                        </Box>
                                    </Stack>
                                    <Typography variant="body1" sx={{ mt: 2 }}>1 X ${product.price}</Typography>
                                </Stack>
                            </Stack>
                        )
                    })
                }

            </Stack>
            <Stack direction="column" spacing={2} sx={{ width: '280px' }}>
                <Typography variant="h6" color="inherit">Price details</Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Price</Typography>
                    <Typography variant="body2">${total}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Shipping</Typography>
                    <Typography variant="body2">Free</Typography>
                </Stack>
                <hr />
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6">Total Amount</Typography>
                    <Typography variant="h6">${total}</Typography>
                </Stack>
                <Button onClick={placeOrder} sx={{ background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))', color: '#fff', borderRadius: 3 }}>
                    Place Order
                </Button>
            </Stack>
        </Stack >
    )
}
