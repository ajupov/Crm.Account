import React, { FC, useEffect } from 'react'

const Dashboard: FC = () => {
    useEffect(() => {
        document.title = 'Дашборд'
    })

    return (
        <>
            <h1>Дашборд</h1>
            <h2>Этот раздел в настоящий момент находится в разработке</h2>
        </>
    )
}

export default Dashboard
