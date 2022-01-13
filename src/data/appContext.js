import React, { useContext, useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { routeNames } from "../data/routeNames"
import useLocalStorage from "../hooks/useLocalStorage";

const steps = [
    {
        id: routeNames.ORDER_DETAILS,
        label: "פרטי ההזמנה",
        active: true
    },
    {
        id: routeNames.SELECT_PRODUCTS,
        label: 'בחירת מוצרים',
        active: false
    },
    {
        id: routeNames.CHECK_OUT,
        label: 'סיכום',
        active: false
    }
];

export const orderDetailsHeaders = [
    {
        field: "name",
        label: "שם המזמינ/ה",
        input: { type: "text" , required:true },
    },
    {
        field: "email",
        label: "אימייל",
        input: { type: "email", required:true },
    },
    {
        field: "phone",
        label: "טלפון",
        input: { type: "tel" , required:true},
    },
    {
        field: "adress",
        label: "כתובת / קבוצת רכישה",
        input: { type: "text", multiline: true , required:true },
    },
]

const appCtx = React.createContext({
    formSteps: steps,
    setActiveStep: () => null,
    orderDetails: {},
    updateOrderDetails: (header = "", value = "") => null,
    tableRef:null
})

export function useAppCtx() {
    return useContext(appCtx)
}

export default function AppCtxProvider(props) {
    const [formSteps, setFormStep] = useState(steps)
    const [orderDetails,setOrderDetails] = useLocalStorage("orderDetails",()=>{
        const storageItem = localStorage.getItem("orderDetails")
        if(!storageItem) {
            const obj = {}
            orderDetailsHeaders.forEach(el=>obj[el.field]="")
            return obj
        }
        return JSON.parse(storageItem)
    })
    const tableRef = useRef(null)
    const navigate = useNavigate()
    const location  = useLocation()

    useEffect(()=>{
        const path = location.pathname.substring(1)
        setFormStep(steps=>{
            return steps.map(step=>{
                if(step.id ===path)return {...step,active:true}
                return step
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])

    function updateOrderDetails(header, value) {
        setOrderDetails({...orderDetails , [header.field]:value})
    }

    function setActiveStep(id) {
        setFormStep(steps => steps.map(step => {
            const updateStep = { ...step, active: false }
            if (id === step.id) updateStep.active = true
            return updateStep
        }))
        navigate(id)
    }

    return <appCtx.Provider value={{
        formSteps,
        setActiveStep,
        orderDetails,
        updateOrderDetails,
        tableRef
    }}>
        {props.children}
    </appCtx.Provider>
}