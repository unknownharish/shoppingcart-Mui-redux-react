import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Grid, Typography, Checkbox, Button } from '@mui/material';
import { Container, Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SummaryTableElement from './SummaryTableElement';


import { useSelector, useDispatch } from 'react-redux'

export default function Summary() {

    const Items = useSelector(x => x);

    let totalPrice = 0
    Items.mystore.mycart.map(x => totalPrice += x.qty * x.price)

    const rows = [
        createData('https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', 'Frozen yoghurt', 'black', 'in stock', 30, 'yes'),
        createData('https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', 'Frozen yoghurt', 'black', 'in stock', 30, 'yes'),

    ];
    function createData(image, name, color, stock, price, buy) {
        return { image, name, color, stock, price, buy };
    }

    return (
        <Container sx={{ my: 8 }}>


            <Grid container spacing={2}>
                <Grid item lg={8}>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ borderBottom: '2px solid black', backgroundColor: '#f8f8f8' }}>
                                    <TableCell align="center" >Product</TableCell>
                                    <TableCell align="center" >Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Sub total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>


                                {Items.mystore.mycart.map((row, idx) => <SummaryTableElement key={idx} row={row} />)}


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item lg={4}>
                    <Box sx={{ border: '3px solid #f8f8f8', display: 'flex', flexDirection: 'column', width: '30vw' }}>
                        <Typography sx={{ p: 2 }} variant='h4'>Cart Totals</Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ p: 2 }} variant='h6'>Subtotal</Typography>
                            <Typography sx={{ p: 2 }} variant='body1' color='primary.main'>{'$' + totalPrice + '.00'}</Typography>
                        </Box>

                        <hr />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ p: 2 }} variant='h6'>Total</Typography>
                            <Typography sx={{ p: 2 }} variant='h6' color='primary.main'>{'$' + totalPrice + '.00'}</Typography>
                        </Box>

                        <Link to='/thankyou'>  <Button variant='contained' sx={{ backgroundColor: 'primary.dark', borderRadius: '20px', m: 2, p: 1.5 }}>PROCEED TO CHECKOUT</Button> </Link>

                    </Box>
                </Grid>
            </Grid>


        </Container>
    )
}
