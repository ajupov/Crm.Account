import React, { FC, useContext } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import ContactsRoutes from '../../routes/ContactsRoutes'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useContactOnChange from '../../hooks/change/useContactOnChange'
import useContactsActions from '../../contexts/ContactsActionsContext/hooks/useContactsActions'

const ContactEditForm: FC = () => {
    const state = useContext(ContactContext)
    const { isLoading } = useContactsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useContactOnChange()

    return state.contact.id ? (
        <EditForm
            id={state.contact.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.contact.createDateTime}
            lastModifyDateTime={state.contact.modifyDateTime}
            historyLink={ContactsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ContactEditForm
