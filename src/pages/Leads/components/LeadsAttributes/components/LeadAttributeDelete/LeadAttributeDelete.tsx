import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import CustomerAttributesActionsContext from '../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContext'
import useCustomerAttributeDelete from './hooks/useCustomerAttributeDelete'

// TODO: Move to l10n
const CustomerAttributeDelete: FC = () => {
    const state = useContext(CustomerAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useCustomerAttributeDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerAttributeDelete
