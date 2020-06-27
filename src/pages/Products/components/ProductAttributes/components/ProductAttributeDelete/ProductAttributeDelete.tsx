import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import ProductAttributesActionsContext from '../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import useProductAttributeDelete from './hooks/useProductAttributeDelete'

const ProductAttributeDelete: FC = () => {
    const state = useContext(ProductAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductAttributeDelete()

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

export default ProductAttributeDelete
