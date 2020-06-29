import React, { FC, useContext } from 'react'

import ProductStatusesActionsContext from '../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useProductStatusRestore from './hooks/useProductStatusRestore'

// TODO: Move to l10n
const ProductStatusRestore: FC = () => {
    const state = useContext(ProductStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useProductStatusRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление статуса"
            content="Вы уверены, что хотите восстановить статус?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductStatusRestore
