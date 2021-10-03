import React, { FC, useContext } from 'react'

import OrderAttributesActionsContext from '../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useOrderAttributeRestore from './hooks/useOrderAttributeRestore'

// TODO: Move to l10n
const OrderAttributeRestore: FC = () => {
    const state = useContext(OrderAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderAttributeRestore()

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

export default OrderAttributeRestore
