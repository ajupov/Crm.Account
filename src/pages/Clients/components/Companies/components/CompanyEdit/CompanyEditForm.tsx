import React, { FC, useContext } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useContactEdit from './hooks/useContactEdit'
import useContactsActions from '../../contexts/ContactsActionsContext/hooks/useContactsActions'

const ContactEditForm: FC = () => {
    const state = useContext(ContactContext)
    const { isLoading } = useContactsActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useContactEdit()

    return state.contact.id ? (
        <EditForm
            id={state.contact.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.contact.createDateTime}
            lastModifyDateTime={state.contact.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ContactEditForm
