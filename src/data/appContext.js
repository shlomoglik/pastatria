import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { routeNames } from "../data/routeNames"

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
        label: "כתובת",
        input: { type: "text", multiline: true },
    },
]

const appCtx = React.createContext({
    formSteps: steps,
    setActiveStep: () => null,
    orderDetails: {},
    updateOrderDetails: (header = "", value = "") => null
})

export function useAppCtx() {
    return useContext(appCtx)
}

export default function AppCtxProvider(props) {
    const [formSteps, setFormStep] = useState(steps)
    const [orderDetails, setOrderDetails] = useState(() => {
        const obj = {}
        orderDetailsHeaders.forEach(el=>obj[el.field]="")
        return obj
    })
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
    },[])
    useEffect(()=>{
        console.log(orderDetails)
    },[orderDetails])

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
        updateOrderDetails
    }}>
        {props.children}
    </appCtx.Provider>
}