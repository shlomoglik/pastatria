import { Button, FormControlLabel, Switch, Card, CardMedia, Typography, CardActions } from "@mui/material"
import { useState } from "react"
import { mapCategoryToImage, useCartList } from "../data/cartContext"

function ButtonCard({ category, idx, isFiltered, toggleFilter }) {
    return (
        <Card sx={{maxWidth: 400}}>
            <CardMedia
                component="img"
                height="140"
                image={mapCategoryToImage[category]}
                alt={category}
            />
            <div style={{
                display: 'grid',
                alignItems: 'flex-start',
                gridTemplateTows: '1fr 1fr max-content',
                justifyContent: 'center'
            }}>
                <CardActions sx={{ alignSelf: 'flex-start' }}>
                    <Button
                        variant={isFiltered ? "contained" : "outlined"}
                        onClick={toggleFilter}
                        key={`${category}_${idx}`}
                    >
                        בחר
                    </Button>
                </CardActions>
                <Typography gutterBottom variant="p" component="p" style={{'justifySelf':'center' , padding:'1rem'}}>
                    {category}
                </Typography>
            </div>
        </Card>
    )
}


export default function FilterByCategory() {
    const { filters, addFilter, removeFilter, addAllFilters, removeAllFilters, categories } = useCartList()
    const [selectAll, setSelectAll] = useState(false)

    function toggleFilter(category) {
        if (filters.includes(category)) removeFilter(category)
        else addFilter(category)
    }
    function toggleAll() {
        if (selectAll) addAllFilters()
        else removeAllFilters()

        setSelectAll(s => !s)
    }
    return (
        <div style={{ display: 'grid', gap: '1rem', justifyContent: 'flex-start', gridTemplateColumns: 'repeat( auto-fill, minmax(5rem, 1fr) )' }}>
            {[...categories].map((category, idx) => (
                <ButtonCard key={category} idx={idx} category={category} toggleFilter={() => toggleFilter(category)} isFiltered={filters.includes(category)} />

            ))}
            <FormControlLabel sx={[{ '& .MuiFormControlLabel-label': { 'fontSize': '14px' } }]} style={{ gridColumn: "1/-1", fontSize: "14px" }} control={<Switch onChange={toggleAll} checked={selectAll} />} label="כל הקטגוריות" />
        </div>
    );
}