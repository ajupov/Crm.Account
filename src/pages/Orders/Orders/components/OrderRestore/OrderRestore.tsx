import React, { FC, useContext } from 'react'

import OrdersActionsContext from '../../contexts/OrdersActionsContext/OrdersActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useOrderRestore from './hooks/useOrderRestore'

// TODO: Move to l10n
const OrderRestore: FC = () => {
    const state = useContext(OrdersActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление заказа"
            content="Вы уверены, что хотите восстановить заказ?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default OrderRestore
