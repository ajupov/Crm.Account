import React, { FC, useContext } from 'react'

import ProductsActionsContext from '../../contexts/ProductsActionsContext/ProductsActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useProductRestore from './hooks/useProductRestore'

// TODO: Move to l10n
const ProductRestore: FC = () => {
    const state = useContext(ProductsActionsContext)
    const { onClickConfirm, onClickCancel } = useProductRestore()

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

export default ProductRestore
