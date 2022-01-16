import { Button, Chip, Stack, TextField, Typography } from "@mui/material"
import { withModal } from "../commons/Modal"
import { formatValue, parseValueByType } from "../data/utils"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/system";

function ProductModal({ product, handleClose, handleInput }) {

    function incAmount() {
        const newNumber = product.amount?Number(product.amount) + 1:1
        handleInput(newNumber, { type: "number", field: "amount" })
    }
    function decAmount() {
        if (isNaN(Number(product.amount)) || Number(product.amount) === 0) return
        handleInput(Number(product.amount) - 1, { type: "number", field: "amount" })
    }
    function setAmount(value) {
        if (value < 0) return
        handleInput(value, { type: "number", field: "amount" })
    }

    return (
        <div dir="rtl" style={{ display: 'grid', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
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
            <Box border={"1px solid grey"} padding={".5rem"} display={"grid"} gap={"1rem"} gridTemplateColumns={"1fr 1fr"} gridTemplateRows={"1fr 1fr"}>
                <Stack gridColumn={"1"} gridRow={"1"}>
                    <Typography variant="h8">מחיר</Typography>
                    <Typography variant="body" fontSize={'20px'} >
                        {formatValue(product.price, "currency")}
                    </Typography>
                </Stack>
                <Stack gridColumn={"2"} gridRow={"1 / -1"} justifyContent={"space-between"}>
                    <Button onClick={incAmount}>
                        הוסף
                        <AddIcon />
                    </Button>
                    <TextField sx={{ mb: 1, flex: '1' }} label="כמות יח׳" value={product.amount} onChange={e => setAmount(e.target.valueAsNumber)} type="number" />
                    <Button onClick={decAmount}>
                        הפחת
                        <RemoveIcon />
                    </Button>
                </Stack>
                <Stack gridColumn={"1"} gridRow={"2"}>
                    <Typography variant="h8">
                        מחיר סופי
                    </Typography>
                    <Typography variant="body2" fontSize={'20px'} >
                        {parseValueByType(product.calcSum, "currency")}
                    </Typography>
                </Stack>
            </Box>
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
