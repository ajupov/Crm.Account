import React, { useEffect } from 'react'

export const Contacts = () => {
    useEffect(() => {
        document.title = 'Контакты'
    })

    return <h1>Контакты</h1>
}
