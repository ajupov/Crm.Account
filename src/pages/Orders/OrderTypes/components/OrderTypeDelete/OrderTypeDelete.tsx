import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import OrderTypesActionsContext from '../../contexts/OrderTypesActionsContext/OrderTypesActionsContext'
import useOrderTypeDelete from './hooks/useOrderTypeDelete'

// TODO: Move to l10n
const OrderTypeDelete: FC = () => {
    const state = useContext(OrderTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderTypeDelete()

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

export default OrderTypeDelete
