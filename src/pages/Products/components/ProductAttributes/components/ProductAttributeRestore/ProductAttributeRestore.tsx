import React, { FC, useContext } from 'react'

import ProductAttributesActionsContext from '../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useProductAttributeRestore from './hooks/useProductAttributeRestore'

const ProductAttributeRestore: FC = () => {
    const state = useContext(ProductAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductAttributeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductAttributeRestore
