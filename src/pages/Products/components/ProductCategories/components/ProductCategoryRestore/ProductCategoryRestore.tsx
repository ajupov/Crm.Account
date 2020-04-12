import React, { FC, useContext } from 'react'

import ProductCategoriesContext from '../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import Restore from '../../../../../../components/Restore/Restore'
import useProductCategoryRestore from './hooks/useProductCategoryRestore'

const ProductCategoryRestore: FC = () => {
    const state = useContext(ProductCategoriesContext)
    const { onClickConfirm, onClickCancel } = useProductCategoryRestore()

    return (
        <Restore
            isRestoring={state.isRestoring}
            title="Восстановление категории"
            content="Вы уверены, что хотите восстановить категорию?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductCategoryRestore
