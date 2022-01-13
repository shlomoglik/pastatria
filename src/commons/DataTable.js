import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { useCartList } from '../data/cartContext';
import { parseValueByType } from "../data/utils"

function DataRow({ rIdx, row , headers}) {
    const { list, updateList } = useCartList()

    const [docData,updateDocData] =useState(row=>{
        return {...row}
    })
    
    function handleInput(value, header) {
        const doc = {...row}
        doc[header.field] = parseValueByType(value, header.type)
        updateDocData(doc)
        updateList(doc)
    }

    function getCellValue(header){
        if(header.calc)return header.calc(docData)
        return row[header.field]
    }

    function getItemByID(id,header){
        return list.find(el=>el.id === id)?.[header.field]
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            {headers.map((h, hIdx) => (
                    <TableCell
                        key={`${row.id}_${hIdx}_${h.field}`}
                        style={{ maxWidth: `calc(100vw / ${headers.length})` }}
                        align='center'
                        >
                        {h.input ?
                            <TextField type={h.input.type || "text"} value={getItemByID(row.id,h) || ""} onChange={e => handleInput(e.target.value, h)} />
                            :
                            getCellValue(h)
                        }
                    </TableCell>
            ))}
        </TableRow>
    )
}


export default function DataTable({headers , data}) {
    const { filters } = useCartList()
    function filterItems(item){
        return filters.length ===0 || filters.includes(item.category)
    }
    return (
        <TableContainer component={Paper}>
            <Table size='small' aria-label="table" sx={{ width: 'fit-content' }}>
                <TableHead>
                    <TableRow>
                        {headers.map(h => (
                            <TableCell component="th" align='center' style={{ fontWeight: '600' }} key={h.field}>{h.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter(filterItems).map((row, rIdx) => (<DataRow key={`${rIdx}_${row.id}`} headers={headers} rIdx={rIdx} row={row} />))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}        
