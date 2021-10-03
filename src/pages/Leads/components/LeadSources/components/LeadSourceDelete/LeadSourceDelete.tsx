import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import CustomerSourcesActionsContext from '../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import useCustomerSourceDelete from './hooks/useCustomerSourceDelete'

// TODO: Move to l10n
const CustomerSourceDelete: FC = () => {
    const state = useContext(CustomerSourcesActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerSourceDelete()

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

export default CustomerSourceDelete
