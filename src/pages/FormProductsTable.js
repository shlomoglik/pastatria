import { Button, Typography } from "@mui/material";
import DataTable from "../commons/DataTable";
import FilterByCategory from "../components/FilterByCategory";
import { data } from '../data/products';
import { useAppCtx } from "../data/appContext";
import { routeNames } from "../data/routeNames";
import {cartProductHeaders} from "../data/cartProductHeaders"

function SelectProducts() {
    const {setActiveStep} = useAppCtx()
  return (
   <div style={{display:'grid' , gap:'1rem' , alignContent:'center'}}>
        <Typography sx={{ 'pb': '1rem', 'mt': "3rem" }} component={"h5"}>סינון לפי קטגוריה</Typography>
        <FilterByCategory />
        <DataTable headers={cartProductHeaders} data={data}/>
        <Button style={{'justifySelf':"flex-start"}} variant='contained' onClick={()=>setActiveStep(routeNames.CHECK_OUT)}>לשלב הבא</Button>
   </div>
  );
}

export default SelectProducts;