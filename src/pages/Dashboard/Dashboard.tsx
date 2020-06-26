import React, { FC, useEffect } from 'react'

const Dashboard: FC = () => {
    useEffect(() => {
        document.title = 'Инфопанель'
    })

    return <h1>Инфопанель</h1>
}

export default Dashboard
