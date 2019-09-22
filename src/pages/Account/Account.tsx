import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Account = () => {
    useEffect(() => {
        document.title = 'Аккаунт'
    })

    return (
        <AuthorizedLayout>
            <h1>Аккаунт</h1>
        </AuthorizedLayout>
    )
}
