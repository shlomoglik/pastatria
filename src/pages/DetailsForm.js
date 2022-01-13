import {  useState } from 'react'
import DataForm from '../commons/DataForm'
import { useAppCtx,orderDetailsHeaders as headers } from '../data/appContext'
import {routeNames} from "../data/routeNames"
  

export default function DetailsForm() {
    const {orderDetails , updateOrderDetails , setActiveStep} = useAppCtx()
    const [errors,setErrors] = useState([])


    function validateForm(){
        setErrors([])
        const errors = []
        headers.forEach(header=>{
            if(header.input.required && !orderDetails[header.field]){
                errors.push(`הערך בשדה - ${header.field} הינו ערך חובה`)
            }
        })
        setErrors([...errors])
    }
    function finish(){
        validateForm()
        setActiveStep(routeNames.SELECT_PRODUCTS)
    }
    return (
        <DataForm errors={errors} storeData={orderDetails} updateStoreData={updateOrderDetails} title="פרטי ההזמנה" headers={headers} finish={finish} button="לשלב הבא"/>
    )
}
