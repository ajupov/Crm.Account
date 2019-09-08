import React, { useEffect } from 'react'

export const Products = () => {
    useEffect(() => {
        document.title = 'Продукты'
    })

    return <h1>Продукты</h1>
}
