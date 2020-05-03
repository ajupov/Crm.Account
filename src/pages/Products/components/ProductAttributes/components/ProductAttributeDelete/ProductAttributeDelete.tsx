import React, { FC, useContext } from 'react'

import Delete from '../../../../../../components/Delete/Delete'
import ProductAttributesActionsContext from '../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import useProductAttributeDelete from './hooks/useProductAttributeDelete'

const ProductAttributeDelete: FC = () => {
    const state = useContext(ProductAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductAttributeDelete()

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

export default ProductAttributeDelete
