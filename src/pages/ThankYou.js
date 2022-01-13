import { Typography } from "@mui/material";
import { useCartList } from "../data/cartContext";
import {parseValueByType} from "../data/utils"


function SelectProducts() {
    const {list} = useCartList()
    function getTotalToPay(){
        return list.reduce((acc,curr)=>acc + (Number(curr?.price) * Number(curr?.amount)) ,0)
    }

  return (
   <div style={{display:'grid' , gap:'1rem'}}>
        <Typography variant="h3" component="h3">תודה שבחרת פסטה טרייה...</Typography>
        <div>
            <Typography variant="h5" component="h4">סהכ לתשלום:</Typography>
            <Typography variant="h4" component="h5">{parseValueByType(getTotalToPay(),"currency")}</Typography>
        </div>
        <Typography variant="p" component="p">
            את התשלום ניתן לבצע גם באמצעות ביט
        </Typography>
        <a href="https://pastatria.co.il/" target={"_self"}>ניתן לבקר באתר שלנו כדי לראות את כל המבצעים והמוצרים</a>
   </div>
  );
}

export default SelectProducts;