import React, { useEffect } from 'react'

export const Settings = () => {
    useEffect(() => {
        document.title = 'Настройки'
    })

    return <h1>Настройки</h1>
}
