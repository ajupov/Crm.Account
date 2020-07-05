import React, { FC, useContext } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import View from '../../../../../../components/common/grids/View/View'
import useContactView from './hooks/useContactView'
import useContactsActions from '../../contexts/ContactsActionsContext/hooks/useContactsActions'

const ContactViewForm: FC = () => {
    const state = useContext(ContactContext)
    const { isLoading } = useContactsActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useContactView()

    return (
        <View
            id={state.contact.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.contact.isDeleted}
            createDate={state.contact.createDateTime}
            lastModifyDateTime={state.contact.modifyDateTime}
            data={map(state.contact)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactViewForm
