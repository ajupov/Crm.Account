import React, { FC, useContext } from 'react'

import ProductAttributesActionsContext from '../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import Restore from '../../../../../../components/Restore/Restore'
import useProductAttributeRestore from './hooks/useProductAttributeRestore'

const ProductAttributeRestore: FC = () => {
    const state = useContext(ProductAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductAttributeRestore()

    return (
        <Restore
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductAttributeRestore
