import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Activities = () => {
    useEffect(() => {
        document.title = 'Задачи'
    })

    return (
        <AuthorizedLayout>
            <h1>Задачи</h1>
        </AuthorizedLayout>
    )
}
