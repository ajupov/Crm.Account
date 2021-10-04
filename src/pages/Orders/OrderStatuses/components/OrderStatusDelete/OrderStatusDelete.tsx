import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import OrderStatusesActionsContext from '../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContext'
import useOrderStatusDelete from './hooks/useOrderStatusDelete'

// TODO: Move to l10n
const OrderStatusDelete: FC = () => {
    const state = useContext(OrderStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderStatusDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление статуса"
            content="Вы уверены, что хотите удалить статус?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderStatusDelete
