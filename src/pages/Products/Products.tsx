import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Products = () => {
    useEffect(() => {
        document.title = 'Продукты'
    })

    return (
        <AuthorizedLayout>
            <h1>Продукты</h1>
        </AuthorizedLayout>
    )
}
