import { Close, Add, Remove } from '@mui/icons-material'
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../REDUX/actionSlice'

export default function SummaryTableElement({ row }) {

    const dispatch = useDispatch()
    const [total, settotal] = useState(parseInt(row.qty))



    function handleTotal(idx) {

        let qty = total + idx
        settotal(qty)
        dispatch(addToCart({ ...row, 'qty': qty  }))
    }


    return (
        <>
            <TableRow

                sx={{ backgroundColor: '#fdfdfd' }}
            >
                <TableCell sx={{ border: 'none', py: 5 }} align="center">

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Close onClick={(e) => dispatch(removeFromCart({ ...row }))} />
                        <img className='summaryImage' src={row.image} alt="" />
                        <Typography color='common.black' variant='body2'> {row.name} </Typography>
                    </Box>

                </TableCell>
                <TableCell sx={{ border: 'none', py: 5, color: '#8e8f96' }} align="center">{'$' + row.price}</TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center">

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #f2f2f2', borderRadius: '15px' }}>
                        <Button variant='text' sx={{ color: 'common.black' }} onClick={(e) => total > 1 ? handleTotal(-1) : settotal(1)}><Remove /></Button>
                        <input type="text" name="" id="" className='number' value={total} disabled='true' />
                        <Button variant='text' sx={{ color: 'common.black' }} onClick={(e) => { handleTotal(1) }}><Add /></Button>

                    </Box>


                </TableCell>
                <TableCell sx={{ border: 'none', py: 5 }} align="center">
                    <Typography color='primary.main'>   {'$' + parseInt(total * row.price)} </Typography>
                </TableCell>

            </TableRow>
        </>
    )
}
