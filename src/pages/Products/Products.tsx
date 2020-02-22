import React, { FC, useEffect } from 'react'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'

const Products: FC = () => {
    useEffect(() => {
        document.title = 'Продукты'
    })

    return <ProductsMenuLayout></ProductsMenuLayout>
}

export default Products
