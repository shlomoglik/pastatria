import DataGridCollapse from "../commons/DataGridCollapse";
import {useFbCollections} from "../data/fbContext"


export const orderDetailsHeaders = [
    {
        field: "date",
        label: "תאריך הזמנה",
        type: "date",
    },
    {
        field: "name",
        label: "שם המזמינ/ה",
    },
    {
        field: "email",
        label: "אימייל",
    },
    {
        field: "phone",
        label: "טלפון",
    },
    {
        field: "adress",
        label: "כתובת / קבוצת רכישה",
    },
    {
        field: "total",
        label: "סכום סופי",
        type:"currency"
    },
]
export const productsHeaders = [
    {
        field: "category",
        label: "קטגוריה",
    },
    {
        field: "product",
        label: "שם המוצר"
    },
    {
        field: "price",
        label: "סכום",
        type: "currency"
    },
    {
        field: "amount",
        label: "כמות",
        type: "number"
    },
    {
        field: "calcSum",
        label: "מחיר סופי למוצר",
        type: "currency",
        calc: (doc)=> Number(doc.amount || 0) * Number(doc.price || 0)
    },
]



function OrdersTable() {
    const {orders} = useFbCollections()
    return (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <DataGridCollapse headers={orderDetailsHeaders} subHeaders={productsHeaders} subRowKey="products" data={orders} subRowTitle="פירוט מוצרים" />
        </div>
    );
}

export default OrdersTable;