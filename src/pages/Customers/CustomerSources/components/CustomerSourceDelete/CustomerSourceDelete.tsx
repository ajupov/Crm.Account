import React, { FC, useContext } from 'react'

import CustomerSourcesActionsContext from '../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import useCustomerSourceDelete from './hooks/useCustomerSourceDelete'

// TODO: Move to l10n
const CustomerSourceDelete: FC = () => {
    const state = useContext(CustomerSourcesActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerSourceDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление источника"
            content="Вы уверены, что хотите удалить источник?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerSourceDelete
