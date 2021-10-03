import React, { FC, useContext } from 'react'

import OrderStatusesActionsContext from '../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useOrderStatusRestore from './hooks/useOrderStatusRestore'

// TODO: Move to l10n
const OrderStatusRestore: FC = () => {
    const state = useContext(OrderStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderStatusRestore()

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

export default OrderStatusRestore
