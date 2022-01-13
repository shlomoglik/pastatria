import { Chip, FormGroup, Stack, TextField, Typography } from "@mui/material"
import {withModal} from "../commons/Modal"
import {parseValueByType} from "../data/utils"


function ProductModal({product}) {
    return (
       <div dir="rtl" style={{display:'grid',gap:'1rem',alignItems:'center',justifyContent:'center'}}>
            <Stack direction={"vertical"} alignItems={"center"} justifyContent={"space-between"}>
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
                <TextField sx={{mb:1}} disabled label="כמות יח׳" value={product.amount} type="number"/>
                <TextField disabled label="מחיר סופי" value={parseValueByType(product.calcSum,"currency")} type="text"/>
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
       </div>
    )
}

export default withModal(ProductModal)
