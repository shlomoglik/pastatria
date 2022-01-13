import { Button, Typography } from "@mui/material";
import DataTable from "../commons/DataTable";
import FilterByCategory from "../components/FilterByCategory";
import { data } from '../data/products';
import { useAppCtx } from "../data/appContext";
import { routeNames } from "../data/routeNames";

const headers = [
  {
      field: "category",
      label: "קטגוריה",
  },
  {
      field: "product",
      label: "מוצר",
  },
  {
      field: "description",
      label: "תיאור",
      hideMobile: true
  },
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
      calc: (doc)=> Number(doc.amount || 0) * Number(doc.price || 0)
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
    const {setActiveStep} = useAppCtx()
  return (
   <div style={{display:'grid' , gap:'1rem'}}>
        <Typography sx={{ 'pb': '1rem', 'mt': "3rem" }} component={"h5"}>סינון לפי קטגוריה</Typography>
        <FilterByCategory />
        <DataTable headers={headers} data={data}/>
        <Button style={{'justifySelf':"flex-start"}} variant='contained' onClick={()=>setActiveStep(routeNames.CHECK_OUT)}>לשלב הבא</Button>
   </div>
  );
}

export default SelectProducts;