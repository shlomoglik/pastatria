import React, { useContext, useEffect, useMemo, useState } from "react"
import { data } from "./products"

const cartCtx = React.createContext({
    list: [],
    filters: [],
    addFilter: () => null,
    removeFilter: () => null,
    updateList: () => null,
    removeItem: () => null,
})

function getCategries() {
    console.log("getCategries.run")
    const categries = new Set()
    data.forEach(item => categries.add(item.category))
    return [...categries]
}

export function useCartList() {
    return useContext(cartCtx)
}

export default function CartCtxProvider(props) {

    const categories = useMemo(getCategries, [])
    const [list, setList] = useState([])
    const [filters, setFilters] = useState([])

    useEffect(() => {
        console.log(filters)
    }, [list, filters])


    function addFilter(elem) {
        setFilters([...filters, elem])
    }
    function removeFilter(elem) {
        setFilters(items => items.filter(el => el !== elem))
    }
    function addAllFilters() {
        setFilters([...categories])
    }
    function removeAllFilters() {
        setFilters([])
    }

    function removeItem(id) {
        setList(list => list.filter(el => el.id !== id))
    }
    function updateList(item) {
        setList(prevList => {
            if (prevList.find(el => el.id === item.id)) {
                return prevList.map(el => {
                    if (el.id === item.id) return item
                    return el
                })
            }
            return [...prevList, { ...item }]
        })
    }

    return <cartCtx.Provider value={{
        list,
        filters,
        updateList,
        removeItem,
        removeFilter,
        addFilter,
        addAllFilters,
        removeAllFilters,
        categories
    }}>
        {props.children}
    </cartCtx.Provider>
}