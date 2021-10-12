import React, { FC, useContext } from 'react'

import OrderTypesActionsContext from '../../contexts/OrderTypesActionsContext/OrderTypesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useOrderTypeRestore from './hooks/useOrderTypeRestore'

// TODO: Move to l10n
const OrderTypeRestore: FC = () => {
    const state = useContext(OrderTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useOrderTypeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление типа"
            content="Вы уверены, что хотите восстановить тип?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default OrderTypeRestore
