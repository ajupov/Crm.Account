import React, { FC, useContext } from 'react'

import ContactsActionsContext from '../../contexts/ContactsActionsContext/ContactsActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useContactRestore from './hooks/useContactRestore'

// TODO: Move to l10n
const ContactRestore: FC = () => {
    const state = useContext(ContactsActionsContext)
    const { onClickConfirm, onClickCancel } = useContactRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление контакта"
            content="Вы уверены, что хотите восстановить контакт?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ContactRestore
