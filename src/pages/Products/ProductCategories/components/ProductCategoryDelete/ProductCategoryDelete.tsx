import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import ProductCategoriesActionsContext from '../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import useProductCategoryDelete from './hooks/useProductCategoryDelete'

// TODO: Move to l10n
const ProductCategoryDelete: FC = () => {
    const state = useContext(ProductCategoriesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductCategoryDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление категории"
            content="Вы уверены, что хотите удалить категорию?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryDelete
