export const cartProductHeaders = [
    //   {
    //       field: "category",
    //       label: "קטגוריה",
    //   },
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
        hideMobile: true
    },
    {
        field: "price",
        label: "סכום",
        type: "currency"
    },
    {
        field: "amount",
        label: "כמות",
        input: { type: "number" }
    },
    {
        field: "calcSum",
        label: "סהכ",
        type:"currency",
        calc: (doc) => Number(doc.amount || 0) * Number(doc.price || 0)
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


export const orderStatusList = {
    // Pending — Customer started the checkout process but did not complete it. Incomplete orders are assigned a "Pending" status and can be found under the More tab in the View Orders screen.
    Pending: {
        value:"Pending",
        label: "בתהליך",
        color: { bg: "", txt: "" }
    },
    // Awaiting Payment — Customer has completed the checkout process, but payment has yet to be confirmed. Authorize only transactions that are not yet captured have this status.
    AwaitingPayment: {
        value:"AwaitingPayment",
        label: "הוזמן - ממתין לתשלום",
        color: { bg: "", txt: "" }
    },
    // Awaiting Fulfillment — Customer has completed the checkout process and payment has been confirmed.
    AwaitingFulfillment: {
        value:"AwaitingFulfillment",
        label: "שולם",
        color: { bg: "", txt: "" }
    },
    // Awaiting Shipment — Order has been pulled and packaged and is awaiting collection from a shipping provider.
    AwaitingShipment: {
        value:"AwaitingShipment",
        label: "ממתין למשלוח",
        color: { bg: "", txt: "" }
    },
    // Awaiting Pickup — Order has been packaged and is awaiting customer pickup from a seller-specified location.
    AwaitingPickup: {
        value:"AwaitingPickup",
        label: "ממתין לאיסוף עצמי",
        color: { bg: "", txt: "" }
    },
    // Partially Shipped — Only some items in the order have been shipped.
    AwaitingShipped: {
        value:"AwaitingShipped",
        label: "נשלח חלקי",
        color: { bg: "", txt: "" }
    },
    // Completed — Order has been shipped/picked up, and receipt is confirmed; client has paid for their digital product, and their file(s) are available for download.
    Completed: {
        value:"Completed",
        label: "הסתיים בהצלחה",
        color: { bg: "", txt: "" }
    },
    // Shipped — Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. A listing of all orders with a "Shipped" status can be found under the More tab of the View Orders screen.
    Shipped: {
        value:"Shipped",
        label: "נשלח",
        color: { bg: "", txt: "" }
    },
    // Cancelled — Seller has cancelled an order, due to a stock inconsistency or other reasons. Stock levels will automatically update depending on your Inventory Settings. Cancelling an order will not refund the order. This status is triggered automatically when an order using an authorize-only payment gateway is voided in the control panel before capturing payment.
    Cancelled: {
        value:"Cancelled",
        label: "נדחה על ידי החברה",
        color: { bg: "", txt: "" }
    },
    // Declined — Seller has marked the order as declined.
    Declined: {
        value:"Declined",
        label: "הזמנה הוסרה ובוטלה",
        color: { bg: "", txt: "" }
    },
    // Refunded — Seller has used the Refund action to refund the whole order. A listing of all orders with a "Refunded" status can be found under the More tab of the View Orders screen.
    Refunded: {
        value:"Refunded",
        label: "הזמנה סורבה",
        color: { bg: "", txt: "" }
    },
    // Disputed — Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order or the seller has marked the order as a fraudulent order.
    Disputed: {
        value:"Disputed",
        label: "בבירור",
        color: { bg: "", txt: "" }
    },
    // Manual Verification Required — Order on hold while some aspect, such as tax-exempt documentation, is manually confirmed. Orders with this status must be updated manually. Capturing funds or other order actions will not automatically update the status of an order marked Manual Verification Required.
    ManualVerificationRequired: {
        value:"ManualVerificationRequired",
        label: "בהקפאה - ממתין לאישור ידני",
        color: { bg: "", txt: "" }
    },
    // Partially Refunded — Seller has partially refunded the order.
    PartiallyRefunded: {
        value:"PartiallyRefunded",
        label: "תשלום סורב חלקית",
        color: { bg: "", txt: "" }
    },

}