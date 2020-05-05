import React, { FC, useContext } from 'react'

import ProductsActionsContext from '../../contexts/ProductsActionsContext/ProductsActionsContext'
import Restore from '../../../../../../components/Restore/Restore'
import useProductRestore from './hooks/useProductRestore'

const ProductRestore: FC = () => {
    const state = useContext(ProductsActionsContext)
    const { onClickConfirm, onClickCancel } = useProductRestore()

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

export default ProductRestore
