import React, { useEffect } from 'react'

function ListRenderer({ items, ItemComponent, itemName }) {
    useEffect(() => {
        console.log("inside list renderer....!!!")
    }, [])

    return (
        <ul>
            {items.map((item) => {
                return <ItemComponent key={item.id} {...{ [itemName]: item }} />
            })}
        </ul>
    )
}

export default ListRenderer