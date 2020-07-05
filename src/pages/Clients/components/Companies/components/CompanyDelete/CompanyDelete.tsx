import React, { FC, useContext } from 'react'

import ContactsActionsContext from '../../contexts/ContactsActionsContext/ContactsActionsContext'
import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import useContactDelete from './hooks/useContactDelete'

// TODO: Move to l10n
const ContactDelete: FC = () => {
    const state = useContext(ContactsActionsContext)
    const { onClickConfirm, onClickCancel } = useContactDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление контакта"
            content="Вы уверены, что хотите удалить контакт?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactDelete
