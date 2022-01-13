import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DataTable from "../commons/DataTable";
import { useAppCtx } from "../data/appContext";
import { useCartList } from "../data/cartContext";
import { routeNames } from "../data/routeNames";
import { parseValueByType } from "../data/utils"
import { db } from "../index"
import { collection, addDoc } from "firebase/firestore"
import { ORDERS } from "../data/collectionNames";

const headers = [
    // {
    //     field: "category",
    //     label: "קטגוריה",
    // },
    {
        field: "product",
        label: "מוצר",
    },
    // {
    //     field: "description",
    //     label: "תיאור",
    //     hideMobile: true
    // },
    {
        field: "unitWeight",
        label: "משקל / נפח / יחידת מידה",
    },
    {
        field: "price",
        label: "סכום",
    },
    {
        field: "amount",
        label: "כמות",
        input: { type: "number" }
    },
    {
        field: "calcSum",
        label: "סהכ",
        calc: (doc) => parseValueByType(Number(doc.amount || 0) * Number(doc.price || 0),"currency")
    },
    // {
    //     field: "allergies",
    //     label: "אלרגנים",
    // },
    // {
    //     field: "items",
    //     label: "רכיבים",
    // },
    // {
    //     field: "nutritionalValues",
    //     label: "ערכים תזונתיים",
    // },
]

function SelectProducts() {
    const { list } = useCartList()
    const { orderDetails } = useAppCtx()
    const navigate = useNavigate()
    function getTotalToPay() {
        return list.reduce((acc, curr) => acc + (Number(curr?.price) * Number(curr?.amount)), 0)
    }

    async function handleSendInvitation() {
        try {
            const checkOutData = {
                ...orderDetails,
                products: [...list],
                total: getTotalToPay(),
                date: new Date().toISOString()
            }
            const colRef = collection(db, `/${ORDERS}`)
            const newDoc = await addDoc(colRef, checkOutData)
            alert(`ההזמנה נשלחה בהצלחה - מזהה ההזמנה הוא - ${newDoc.id}`)
            navigate(`/system/${routeNames.THANK_YOU}`, { replace: true })
        } catch (err) {
            console.error(err);
            alert("מצטערים , אבל אירעה שגיאה... בוא ננסה בפעם אחרת")
        }
    }
    return (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <DataTable headers={headers} data={list} />
            <div>
                <Typography variant="h5" component="h4">סהכ לתשלום:</Typography>
                <Typography variant="h4" component="h5">{parseValueByType(getTotalToPay(), "currency")}</Typography>
            </div>
            <Button disabled={!getTotalToPay()>0} style={{ 'justifySelf': "flex-start" }} variant='contained' onClick={handleSendInvitation}>שליחת ההזמנה</Button>
        </div>
    );
}

export default SelectProducts;