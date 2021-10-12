import React, { FC, useContext } from 'react'

import CustomerSourcesActionsContext from '../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useCustomerSourceRestore from './hooks/useCustomerSourceRestore'

// TODO: Move to l10n
const CustomerSourceRestore: FC = () => {
    const state = useContext(CustomerSourcesActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerSourceRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление источника"
            content="Вы уверены, что хотите восстановить источник?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default CustomerSourceRestore
