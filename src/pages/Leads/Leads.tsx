import React, { FC, useEffect } from 'react'

const Leads: FC = () => {
    useEffect(() => {
        document.title = 'Лиды'
    })

    return <h1>Лиды</h1>
}

export default Leads
