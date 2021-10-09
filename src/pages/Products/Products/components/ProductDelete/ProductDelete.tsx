import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import ProductsActionsContext from '../../contexts/ProductsActionsContext/ProductsActionsContext'
import useProductDelete from './hooks/useProductDelete'

// TODO: Move to l10n
const ProductDelete: FC = () => {
    const state = useContext(ProductsActionsContext)
    const { onClickConfirm, onClickCancel } = useProductDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление продукта"
            content="Вы уверены, что хотите удалить продукт?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductDelete
