import { Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

export default function DataForm({ errors=[],storeData, updateStoreData, title, button, headers, finish = () => null }) {
    const [docData,setDocData] = useLocalStorage("orderDetails",()=>{
        const storageItem = localStorage.getItem("orderDetails")
        if(!storageItem) return {}
        return JSON.parse(storageItem)
    })

    function handleInput(header,value){
        setDocData(prev=>{
            return {...prev,[header.field]:value}
        })
        updateStoreData(header, value)
    }

    return (
        <div style={{ display: 'grid', gap: '1rem', justifyContent: 'flex-start' }}>
            <Typography>{title}</Typography>
            {headers.map((h,ind) => (
                <TextField
                    id={h.field}
                    key={`${ind}_${h.field}`}
                    label={h.label}
                    value={docData[h.field]}
                    onChange={e => handleInput(h, e.target.value)}
                    variant="outlined" {...h.input} 
                />
            ))}
            <Divider />
            {button &&
                <Button disabled={errors.length>0} variant='contained' onClick={finish}>{button}</Button>
            }
        </div>
    )
}
