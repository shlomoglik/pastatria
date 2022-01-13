const currencyFormat = new Intl.NumberFormat(undefined,{
    currency:"ILS",
    style:"currency",
    maximumFractionDigits:2,
    minimumFractionDigits:0
})
export function parseValueByType(value,type){
    switch(type){
        case "number":
            return parseFloat(value)
        case "currency":
            return currencyFormat.format(parseFloat(value))
        default:
            return value
    }
}