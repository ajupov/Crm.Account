import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import ProductsActionsContext from '../../contexts/ProductsActionsContext/ProductsActionsContext'
import useProductDelete from './hooks/useProductDelete'

const ProductDelete: FC = () => {
    const state = useContext(ProductsActionsContext)
    const { onClickConfirm, onClickCancel } = useProductDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductDelete
