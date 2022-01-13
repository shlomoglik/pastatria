import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField, useMediaQuery } from '@mui/material';
import { useCartList } from '../data/cartContext';
import { parseValueByType } from "../data/utils"
import { useAppCtx } from '../data/appContext';
import { useModal } from './Modal';
import ProductModal from '../components/ProductModal';

function DataRow({ rIdx, row, headers, isMobile }) {
    const { list, updateList } = useCartList()
    const [open, handleOpen, handleClose] = useModal()

    function handleInput(value, header) {
        const doc = { ...row }
        doc[header.field] = parseValueByType(value, header.type)
        updateList(doc)
    }

    function getCellValue(header) {
        const existInList = list.find(el => el.id === row.id)
        if (existInList) return parseValueByType(existInList[header.field], header.type)
        return parseValueByType(row[header.field], header.type)
    }

    function getItemByID(id, header) {
        return list.find(el => el.id === id)?.[header.field]
    }
    function handleModal(header) {
        if (header.field === "product") {
            handleOpen()
        }
    }


    return (
        <>
            <ProductModal open={open} handleClose={handleClose} product={row}/>
            <TableRow
                sx={{ 
                    '&:last-child td, &:last-child th': { border: 0 } ,
                    '& > :first-child':{transition:'all .2s ease' , cursor:'pointer'},
                    '& > :first-child:hover':{textDecoration:'underline' , color:'primary.main'},
                }}
            >
                {headers.map((h, hIdx) => (
                    (isMobile && h.hideMobile) ? null :
                        <TableCell
                            onClick={() => handleModal(h)}
                            key={`${row.id}_${hIdx}_${h.field}`}
                            style={{ maxWidth: `calc(100vw / ${headers.length})` }}
                            align='center'
                        >
                            {h.input ?
                                <TextField sx={{ '& input': { padding: '5px !important' } }} type={h.input.type || "text"} value={getItemByID(row.id, h) || ""} onChange={e => handleInput(e.target.value, h)} />
                                :
                                getCellValue(h)
                            }
                        </TableCell>
                ))}
            </TableRow>
        </>
    )
}


export default function DataTable({ headers, data }) {
    const { filters } = useCartList()
    const { tableRef } = useAppCtx()
    const isMobile = useMediaQuery('(max-width:576px)');
    function filterItems(item) {
        return filters.length === 0 || filters.includes(item.category)
    }
    return (
        <TableContainer component={Paper} ref={tableRef} >
            <Table size='small' aria-label="table" sx={{ width: 'fit-content' }}>
                <TableHead>
                    <TableRow>
                        {headers.map(h => (
                            (isMobile && h.hideMobile) ? null :
                                <TableCell component="th" align='center' style={{ fontWeight: '600' }} key={h.field}>{h.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter(filterItems).map((row, rIdx) => (<DataRow isMobile={isMobile} key={`${rIdx}_${row.id}`} headers={headers} rIdx={rIdx} row={row} />))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}        
