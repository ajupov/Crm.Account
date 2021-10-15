import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import OrdersActionsContext from '../../contexts/OrdersActionsContext/OrdersActionsContext'
import useOrderDelete from './hooks/useOrderDelete'

// TODO: Move to l10n
const OrderDelete: FC = () => {
    const state = useContext(OrdersActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление заказа"
            content="Вы уверены, что хотите удалить заказ?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderDelete
