import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Settings = () => {
    useEffect(() => {
        document.title = 'Настройки'
    })

    return (
        <AuthorizedLayout>
            <h1>Настройки</h1>
        </AuthorizedLayout>
    )
}
