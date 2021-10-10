import React, { FC, useEffect } from 'react'

const Dashboard: FC = () => {
    useEffect(() => {
        document.title = 'Дашборд'
    })

    return <h1>Дашборд</h1>
}

export default Dashboard
