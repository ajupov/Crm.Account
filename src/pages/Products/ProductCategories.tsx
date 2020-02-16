import React, { FC, useEffect } from 'react'

import useProductCategories from './hooks/useProductCategories'

const ProductCategories: FC = () => {
    useEffect(() => {
        document.title = 'Категории'
    })

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const categories = useProductCategories(0, 10)

    return (
        <>
            <h1>Категории</h1>
            {JSON.stringify(categories)}
        </>
    )
}

export default ProductCategories
