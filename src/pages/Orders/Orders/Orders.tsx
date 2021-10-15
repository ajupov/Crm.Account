import React, { FC, useEffect } from 'react'

const Orders: FC = () => {
    useEffect(() => {
        document.title = 'Заказы'
    })

    return <h1>Заказы</h1>
}

export default Orders
