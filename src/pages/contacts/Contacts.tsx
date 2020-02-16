import React, { FC, useEffect } from 'react'

const Contacts: FC = () => {
    useEffect(() => {
        document.title = 'Контакты'
    })

    return <h1>Контакты</h1>
}

export default Contacts
