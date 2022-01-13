import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useCartList } from "../data/cartContext";
import {parseValueByType} from "../data/utils"
import {mapCategoryToImage} from "../data/cartContext"
import {socialLinks} from "../data/links"


function SelectProducts() {
    const {list} = useCartList()
    function getTotalToPay(){
        return list.reduce((acc,curr)=>acc + (Number(curr?.price) * Number(curr?.amount)) ,0)
    }

  return (
   <div style={{display:'grid' , gap:'1rem'}}>
        <Typography variant="h3" component="h3">תודה שבחרת פסטטרייה...</Typography>
        <div>
            <Typography variant="h5" component="h4">סהכ לתשלום:</Typography>
            <Typography variant="h4" component="h5">{parseValueByType(getTotalToPay(),"currency")}</Typography>
        </div>
        <Typography variant="p" component="p">
            את התשלום ניתן לבצע גם באמצעות ביט
        </Typography>
        <Typography variant="p" component="p" sx={{'display':'inline-flex','alignItems':'center',gap:'5px'}} >
            <span>למתכונים , טיפים ורעיונות לרטבים בקרו אותנו ב </span>
            <a href={socialLinks.IG}>
                <img src="/igIcon.svg" alt="באינסטגרם"/>
            </a>
            <span> או ב </span>
            <a href={socialLinks.FB}>
                <img src="/fbIcon.svg" alt="בפייסבוק"/>
            </a>
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {Object.entries(mapCategoryToImage).map(([title,img]) => (
            <ImageListItem key={title}>
            <img
                src={`/${img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={title}
            />
            </ImageListItem>
        ))}
        </ImageList>
   </div>
  );
}

export default SelectProducts;