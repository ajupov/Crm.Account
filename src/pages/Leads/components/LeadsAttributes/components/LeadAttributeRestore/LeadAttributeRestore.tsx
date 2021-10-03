import React, { FC, useContext } from 'react'

import CustomerAttributesActionsContext from '../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useCustomerAttributeRestore from './hooks/useCustomerAttributeRestore'

// TODO: Move to l10n
const CustomerAttributeRestore: FC = () => {
    const state = useContext(CustomerAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerAttributeRestore()

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

export default CustomerAttributeRestore
