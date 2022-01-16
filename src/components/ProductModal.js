import { Button, Chip, FormGroup, Stack, TextField, Typography } from "@mui/material"
import {withModal} from "../commons/Modal"
import {parseValueByType} from "../data/utils"


function ProductModal({product , handleClose , handleInput}) {
    return (
       <div dir="rtl" style={{display:'grid',gap:'1rem',alignItems:'center',justifyContent:'center'}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography>#{product.id}</Typography>
                <Chip label={product.category} />
            </Stack>
            <Typography variant="h5">{product.product}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Stack>
                <Typography variant="h8">יחידת מידה</Typography>
                <Typography variant="body2">{product.unitWeight}</Typography>
            </Stack>
            <FormGroup >
                <TextField sx={{mb:1}} disabled label="מחיר" value={parseValueByType(product.price,"currency")}/>
                <TextField sx={{mb:1}} label="כמות יח׳" value={product.amount} onChange={e => handleInput(e.target.value, { type: "number", field: "amount" })} type="number"/>
                <TextField disabled label="מחיר סופי" value={product.calcSum} type="text"/>
            </FormGroup>
            <Stack>
                <Typography variant="h8">אלרגנים</Typography>
                <Typography variant="body2">{product.allergies}</Typography>
            </Stack>
            <Stack>
                <Typography variant="h8">מרכיבים</Typography>
                <Typography variant="body2">{product.items}</Typography>
            </Stack>
            <Stack>
                <Typography variant="h8">ערכים תזונתיים</Typography>
                <Typography variant="body2">{product.nutritionalValues}</Typography>
            </Stack>
            <Button onClick={handleClose}>סגור</Button>
       </div>
    )
}

export default withModal(ProductModal)
