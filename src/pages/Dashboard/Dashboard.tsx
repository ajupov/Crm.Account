import React, { useEffect } from 'react'

export const Dashboard = () => {
    useEffect(() => {
        document.title = 'Дашбоард'
    })

    return <h1>Дашбоард</h1>
}
