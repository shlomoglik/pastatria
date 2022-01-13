import { Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

export default function DataForm({ errors=[],storeData, updateStoreData, title, button, headers, finish = () => null }) {
    return (
        <div style={{ display: 'grid', gap: '1rem', justifyContent: 'center' }}>
            <Typography>{title}</Typography>
            {headers.map((h,ind) => (
                <TextField
                    id={h.field}
                    key={`${ind}_${h.field}`}
                    label={h.label}
                    value={storeData[h.field]}
                    onChange={e => updateStoreData(h, e.target.value)}
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
