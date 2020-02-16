import React, { FC, useEffect } from 'react'

const Deals: FC = () => {
    useEffect(() => {
        document.title = 'Сделки'
    })

    return <h1>Сделки</h1>
}

export default Deals
