import React, { FC, useContext } from 'react'

import ContactAttributesActionsContext from '../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContext'
import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import useContactAttributeDelete from './hooks/useContactAttributeDelete'

// TODO: Move to l10n
const ContactAttributeDelete: FC = () => {
    const state = useContext(ContactAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useContactAttributeDelete()

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

export default ContactAttributeDelete
