import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Calendar = () => {
    useEffect(() => {
        document.title = 'Календарь'
    })

    return (
        <AuthorizedLayout>
            <h1>Календарь</h1>
        </AuthorizedLayout>
    )
}
