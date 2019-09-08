import React, { useEffect } from 'react'

export const Home = () => {
    useEffect(() => {
        document.title = 'Crm'
    })

    return <h1>Crm</h1>
}
