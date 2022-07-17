import React, { useEffect } from 'react'
import { Box, Container, Stack, FormControl, Select, MenuItem, Typography, DialogTitle, DialogContent, DialogContentText, RadioGroup, FormControlLabel, Radio, Dialog } from '@mui/material'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import TuneIcon from '@mui/icons-material/Tune';
import { useFormik } from 'formik';

export default function CollectionHead({ sort, sortOpen, sortClose, filterOpen, setOrder }) {
    const formik = useFormik({
        initialValues: {
            order: 'default',
        }
    })

    useEffect(() => {
        setOrder(formik.values.order)
    }, [formik.values.order])

    return <Container maxWidth="xl">
        <Stack direction="column">
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 4 }}>
                <Box>
                    <Typography component="span" variant="h6" sx={{ mb: 2 }}>Collections</Typography>
                </Box>
                <Box display={{ xs: 'none', md: 'block' }}>
                    <FormControl>
                        <Select sx={{ minWidth: 180 }} size="small"
                            value={formik.values.order}
                            name="order"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.order}
                        >
                            <MenuItem value={"default"}>
                                Default
                            </MenuItem>
                            <MenuItem value={"highToLow"}>
                                Price: High to Low
                            </MenuItem>
                            <MenuItem value={"lowToHigh"}>
                                Price: Low to High
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Stack direction="row" spacing={2} display={{ xs: 'block', md: 'none' }}>
                    <ImportExportIcon onClick={sortOpen} />
                    <TuneIcon onClick={filterOpen} />
                </Stack>
            </Stack>
        </Stack>
        <Dialog
            open={sort}
            onClose={sortClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                Sort By
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Stack direction="column">
                        <RadioGroup
                            defaultValue={formik.values.order}
                            name="order"
                        >
                            <FormControlLabel
                                control={<Radio />}
                                onChange={formik.handleChange}
                                value="default"
                                label="Default"
                            />
                            <FormControlLabel
                                control={<Radio />}
                                onChange={formik.handleChange}
                                value="highToLow"
                                label="Price: High to Low"
                            />
                            <FormControlLabel
                                control={<Radio />}
                                onChange={formik.handleChange}
                                value="lowToHigh"
                                label="Price: Low to High"
                            />
                        </RadioGroup>
                    </Stack>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </Container>
}
