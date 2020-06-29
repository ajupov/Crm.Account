import React, { FC, useContext } from 'react'

import ContactAttributeContext from '../../contexts/ContactAttributeContext/ContactAttributeContext'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useContactAttributeEdit from './hooks/useContactAttributeEdit'
import useContactAttributesActions from '../../contexts/ContactAttributesActionsContext/hooks/useContactAttributesActions'

const ContactAttributeEditForm: FC = () => {
    const state = useContext(ContactAttributeContext)
    const { isLoading } = useContactAttributesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useContactAttributeEdit()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ContactAttributeEditForm
