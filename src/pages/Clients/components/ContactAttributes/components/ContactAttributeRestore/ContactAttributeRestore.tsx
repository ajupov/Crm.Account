import React, { FC, useContext } from 'react'

import ContactAttributesActionsContext from '../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useContactAttributeRestore from './hooks/useContactAttributeRestore'

// TODO: Move to l10n
const ContactAttributeRestore: FC = () => {
    const state = useContext(ContactAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useContactAttributeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ContactAttributeRestore
