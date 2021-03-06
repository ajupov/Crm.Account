import React, { FC, useContext } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import ContactsRoutes from '../../routes/ContactsRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useContactView from './hooks/useContactView'
import useContactsActions from '../../contexts/ContactsActionsContext/hooks/useContactsActions'

const ContactViewForm: FC = () => {
    const state = useContext(ContactContext)
    const { isLoading } = useContactsActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useContactView()

    return (
        <View
            id={state.contact.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.contact.isDeleted}
            createDate={state.contact.createDateTime}
            lastModifyDateTime={state.contact.modifyDateTime}
            data={map(state.contact)}
            editLink={ContactsRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ContactsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactViewForm
