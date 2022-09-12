import { SentimentVerySatisfied, ShoppingCartOutlined } from '@mui/icons-material'
import { Box, Checkbox, TableCell, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../REDUX/actionSlice'

export default function MainTableElement({ row }) {

    const dispatch = useDispatch()
    const [added, setadded] = useState(true)
    const [qty, setqty] = useState(1)


    function handleCart() {


        setadded(!added)
        if (added) {
            dispatch(addToCart({ ...row,'qty':qty }))
        } else {
            dispatch(removeFromCart({ ...row }))
        }

    }

    return (
        <>
            <TableRow
                sx={{ backgroundColor: '#fdfdfd' }}
            >

                <TableCell sx={{ border: 'none', py: 5 }} align="center">  <img className='image' src={row.image} alt="" /></TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center"><Typography color='primary.main' > {row.name} </Typography></TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center"><Typography color='primary.main' > {row.color} </Typography></TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center">{'$' + row.price}</TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <SentimentVerySatisfied sx={{ color: 'success.main', mx: 1 }} /> {row.stock}
                    </Box>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center">

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: '20px' }}>
                        <input type="text" name="" id="" className='number' value={qty} onChange={(e)=>{setqty(e.target.value)}} />
                        <Box sx={{ backgroundColor: 'common.black', display: 'flex', alignItems: 'center', px: '20px', py: '2px', }}>
                            <ShoppingCartOutlined sx={{ color: 'common.white' }} />
                        </Box>
                        <Checkbox onClick={() => { handleCart() }} />
                    </Box>


                </TableCell>
            </TableRow>

        </>
    )
}
