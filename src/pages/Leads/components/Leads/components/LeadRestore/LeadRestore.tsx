import React, { FC, useContext } from 'react'

import CustomersActionsContext from '../../contexts/CustomersActionsContext/CustomersActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useCustomerRestore from './hooks/useCustomerRestore'

// TODO: Move to l10n
const CustomerRestore: FC = () => {
    const state = useContext(CustomersActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление лида"
            content="Вы уверены, что хотите восстановить лида?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default CustomerRestore
