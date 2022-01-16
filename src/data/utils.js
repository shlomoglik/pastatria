const currencyFormat = new Intl.NumberFormat(undefined,{
    currency:"ILS",
    style:"currency",
    maximumFractionDigits:2,
    minimumFractionDigits:0
})

const dateFormat = new Intl.DateTimeFormat("en-IL",{
    dateStyle:"short",
    timeStyle:"short",
    hour12: false,
})


export function parseValueByType(value,type){
    switch(type){
        case "number":
            return Number(value)
        case "currency":
            return currencyFormat.format(Number(value) || 0)
        case "date":
            return dateFormat.format(new Date(value))
        default:
            return value
    }
}