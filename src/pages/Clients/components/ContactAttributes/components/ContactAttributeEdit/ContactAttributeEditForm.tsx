import React, { FC, useContext } from 'react'

import ContactAttributeContext from '../../contexts/ContactAttributeContext/ContactAttributeContext'
import ContactAttributesRoutes from '../../routes/ContactAttributesRoutes'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useContactAttributeOnChange from '../../hooks/useContactAttributeOnChange'
import useContactAttributesActions from '../../contexts/ContactAttributesActionsContext/hooks/useContactAttributesActions'

const ContactAttributeEditForm: FC = () => {
    const state = useContext(ContactAttributeContext)
    const { isLoading } = useContactAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useContactAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={ContactAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ContactAttributeEditForm
