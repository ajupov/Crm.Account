import React, { FC, useContext } from 'react'

import ProductCategoriesActionsContext from '../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useProductCategoryRestore from './hooks/useProductCategoryRestore'

// TODO: Move to l10n
const ProductCategoryRestore: FC = () => {
    const state = useContext(ProductCategoriesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductCategoryRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление категории"
            content="Вы уверены, что хотите восстановить категорию?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductCategoryRestore
