import React, { FC, useEffect } from 'react'

const Clients: FC = () => {
    useEffect(() => {
        document.title = 'Клиенты'
    })

    return <h1>Клиенты</h1>
}

export default Clients
