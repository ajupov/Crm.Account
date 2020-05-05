import React, { FC, useContext } from 'react'

import Delete from '../../../../../../components/Delete/Delete'
import ProductsActionsContext from '../../contexts/ProductsActionsContext/ProductsActionsContext'
import useProductDelete from './hooks/useProductDelete'

const ProductDelete: FC = () => {
    const state = useContext(ProductsActionsContext)
    const { onClickConfirm, onClickCancel } = useProductDelete()

    return (
        <Delete
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductDelete
