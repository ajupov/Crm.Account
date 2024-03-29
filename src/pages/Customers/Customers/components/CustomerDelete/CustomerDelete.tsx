import React, { FC, useContext } from 'react'

import CustomersActionsContext from '../../contexts/CustomersActionsContext/CustomersActionsContext'
import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import useCustomerDelete from './hooks/useCustomerDelete'

// TODO: Move to l10n
const CustomerDelete: FC = () => {
    const state = useContext(CustomersActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление клиента"
            content="Вы уверены, что хотите удалить клиента?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerDelete
