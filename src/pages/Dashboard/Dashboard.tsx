import React, { FC, useEffect } from 'react'

const Dashboard: FC = () => {
    useEffect(() => {
        document.title = 'Дашбоард'
    })

    return <h1>Дашбоард</h1>
}

export default Dashboard
