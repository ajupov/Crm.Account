import React, { FC, useContext } from 'react'

import Delete from '../../../../../../components/Delete/Delete'
import ProductCategoriesActionsContext from '../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import useProductCategoryDelete from './hooks/useProductCategoryDelete'

const ProductCategoryDelete: FC = () => {
    const state = useContext(ProductCategoriesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductCategoryDelete()

    return (
        <Delete
            isDeleting={state.isDeleting}
            title="Удаление категории"
            content="Вы уверены, что хотите удалить категорию?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryDelete
