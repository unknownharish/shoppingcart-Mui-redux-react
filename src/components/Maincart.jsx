import { useSelector, useDispatch } from 'react-redux';
import { filterByName, filterBySize, filterByKeyword } from '../REDUX/actionSlice'

import { RotateLeft } from '@mui/icons-material';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import MainTableElement from './MainTableElement';





export default function Maincart() {

    const Items = useSelector(x => x);
    const dispatch = useDispatch();

    const [search, setsearch] = useState('');
    const [size, setsize] = useState('');


    function searchTheString(e) {
        let searchStr = e.target.value
        dispatch(filterByKeyword(searchStr))
        //  console.log(searchStr)
    }

    const handleChange = (event) => {
        let newSearch = event.target.value
        setsearch(newSearch);
        dispatch(filterByName(newSearch))


    };

    const handlesize = (event) => {

        let newSize = event.target.value
        setsize(newSize);
        dispatch(filterBySize(newSize))
        // console.log(size)
    };
    const resetState = (event) => {
        setsize('');
        setsearch('');

        // dispatch(reset())
    };

    // console.log(Items)



    const rows = [
        createData('https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', 'Frozen yoghurt', 'black', 'in stock', 30, 'yes'),
        createData('https://ugosports.co.uk/wp-content/uploads/2021/01/Adidas-hoodie-mens-grey.jpg', 'Frozen yoghurt', 'black', 'in stock', 30, 'yes'),

    ];
    function createData(image, name, color, stock, price, buy) {
        return { image, name, color, stock, price, buy };
    }


    return (

        <Container sx={{ fontSize: '1rem' }}>

            {/* header */}
            <Box sx={{ marginY: '2rem', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box sx={{ display: 'flex' }}>

                    <Box  >
                        <FormControl sx={{ width: '100px' }}>
                            <InputLabel id="demo-simple-select-label">search</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={search}
                                label="search"
                                onChange={(e) => { handleChange(e) }}
                            >
                                <MenuItem value={'hoodie'}>hoodies</MenuItem>
                                <MenuItem value={'T-shirt'}>T-shirt</MenuItem>
                                <MenuItem value={'pant'}>pants</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ marginX: 1 }} >
                        <FormControl sx={{ width: '120px' }}>
                            <InputLabel id="demo-simple-select-label">size</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="search"
                                onChange={(e) => { handlesize(e) }}
                            >
                                <MenuItem value={'S'}>small</MenuItem>
                                <MenuItem value={'M'}>medium</MenuItem>
                                <MenuItem value={'L'}>large</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Button variant='text' startIcon={<RotateLeft />} onClick={() => resetState()}> reset</Button>

                </Box>
                <Box >
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>

                        <Typography varient='body1' sx={{ mx: 1 }}>Search</Typography>
                        <TextField id="leftSearch" sx={{ mx: 1, backgroundColor: '#f2f2f2', outline: '1px solid #f2f2f2' }} variant="outlined" size='small' onChange={(e) => searchTheString(e)} />

                        <Link to={'/cart/checkout'}><Button variant='contained' onClick={() => { }}> Add to Cart</Button> </Link>
                    </Box>
                </Box>
            </Box>



            <Box sx={{}} id='displayItems'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ borderBottom: '2px solid black', backgroundColor: '#f8f8f8' }}>
                                <TableCell align="center" >Image</TableCell>
                                <TableCell align="center" >Name</TableCell>
                                <TableCell align="center">Color</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Stock</TableCell>
                                <TableCell align="center"><Typography variant='body1' sx={{ paddingLeft: '30px' }}> Buy </Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Items.mystore.condition.length > 0 ? Items.mystore.condition.map((row, idx) => <MainTableElement key={idx} row={row} />) : Items.mystore.products.map((row, idx) => <MainTableElement key={idx} row={row} />)}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>



        </Container>

    )
}
