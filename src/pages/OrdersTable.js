import DataGridCollapse from "../commons/DataGridCollapse";


export const orderDetailsHeaders = [
    {
        field: "date",
        label: "תאריך הזמנה",
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
        field: "totalSum",
        label: "סכום סופי",
    },
]
export const productsHeaders = [
    {
        field: "category",
        label: "קטגוריה",
    },
    {
        field: "productName",
        label: "שם המוצר"
    },
    {
        field: "price",
        label: "סכום",
        type:"currency"
    },
    {
        field: "amount",
        label: "כמות",
        type:"number"
    },
    {
        field: "totalSum",
        label: "מחיר סופי למוצר",
        type:"currency"
    },
]

const data = [{
    id: 1,
    date: "01/01/2021",
    name: "shlomo",
    email: "sjlomolgik@gmail.com",
    phone: "053-3393623",
    adress: "ncut adfaskdfasdf",
    totalSum: "5,000 שח",
    subItems: [
        {
            id: 10,
            category: "רביולי",
            productName: "רביולי גבינות",
            price: 150,
            amount: 5,
            totalSum: 750,
        }
    ]
}]


function OrdersTable() {
    return (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <DataGridCollapse headers={orderDetailsHeaders} subHeaders={productsHeaders} data={data} subRowTitle="פירוט מוצרים"/>
        </div>
    );
}

export default OrdersTable;