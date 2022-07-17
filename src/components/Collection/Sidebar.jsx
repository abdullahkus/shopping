import React, { useEffect } from 'react'
import { Container, Stack, Checkbox, FormControlLabel, Typography, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

export default function Sidebar({ filter, filterClose, filterOpen, brandFilter, setBrandFilter, categoryFilter, setCategoryFilter }) {
    const brands = useSelector(state => state.product.brands)
    const categories = useSelector(state => state.product.categories)

    
    const formik = useFormik({
        initialValues: {
            brands: brandFilter,
            categories: categoryFilter,
        }
    })

    useEffect(() => {
        setBrandFilter(formik.values.brands)
    }, [formik.values.brands])

    useEffect(() => {
        setCategoryFilter(formik.values.categories)
    }, [formik.values.categories])

    return <Container maxWidth="xl">
        <Stack direction="column" spacing={2}>
            <Typography component="span" variant="h6" sx={{ mb: 3 }}>Filters</Typography>
            <Stack direction="column">
                <Typography component="span" variant="subtitle1" color="initial">Brand</Typography>
                {
                    brands.map(brand => (
                        <FormControlLabel
                            key={brand.id}
                            name="brands"
                            checked={formik.values.brands.includes(String(brand.id))}
                            value={brand.id}
                            label={brand.name}
                            control={<Checkbox />}
                            onChange={formik.handleChange}
                        />
                    ))
                }
            </Stack>
            <Stack direction="column">
                <Typography component="span" variant="subtitle1" color="initial">Category</Typography>
                {
                    categories.map(category => (
                        <FormControlLabel
                            key={category.id}
                            name="categories"
                            checked={formik.values.categories.includes(String(category.id))}
                            value={category.id}
                            label={category.name}
                            control={<Checkbox />}
                            onChange={formik.handleChange}
                        />
                    ))
                }
            </Stack>
        </Stack>
        <Dialog
            open={filter}
            onClose={filterClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">
                Filters
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Stack direction="row" spacing={2}>
                        <Stack direction="column">
                            <Typography component="span" variant="subtitle1" color="initial">Brand</Typography>
                            {
                                brands.map(brand => (
                                    <FormControlLabel
                                        key={brand.id}
                                        name="brands"
                                        checked={formik.values.brands.includes(String(brand.id))}
                                        value={brand.id}
                                        label={brand.name}
                                        control={<Checkbox />}
                                        onChange={formik.handleChange}
                                    />
                                ))
                            }
                        </Stack>
                        <Stack direction="column">
                            <Typography component="span" variant="subtitle1" color="initial">Category</Typography>
                            {
                                categories.map(category => (
                                    <FormControlLabel
                                        key={category.id}
                                        name="categories"
                                        checked={formik.values.categories.includes(String(category.id))}
                                        value={category.id}
                                        label={category.name}
                                        control={<Checkbox />}
                                        onChange={formik.handleChange}
                                    />
                                ))
                            }
                        </Stack>
                    </Stack>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </Container>
}
