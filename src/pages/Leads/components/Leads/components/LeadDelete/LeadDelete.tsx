import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import CustomersActionsContext from '../../contexts/CustomersActionsContext/CustomersActionsContext'
import useCustomerDelete from './hooks/useCustomerDelete'

// TODO: Move to l10n
const CustomerDelete: FC = () => {
    const state = useContext(CustomersActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление лида"
            content="Вы уверены, что хотите удалить лида?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerDelete
