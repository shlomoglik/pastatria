const currencyFormat = new Intl.NumberFormat(undefined,{
    currency:"NIS",
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