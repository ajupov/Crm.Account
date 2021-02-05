import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import LeadAttributeContext from '../../contexts/LeadAttributeContext/LeadAttributeContext'
import LeadAttributesRoutes from '../../routes/LeadAttributesRoutes'
import useLeadAttributeOnChange from '../../hooks/useLeadAttributeOnChange'
import useLeadAttributesActions from '../../contexts/LeadAttributesActionsContext/hooks/useLeadAttributesActions'

const LeadAttributeEditForm: FC = () => {
    const state = useContext(LeadAttributeContext)
    const { isLoading } = useLeadAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useLeadAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={LeadAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default LeadAttributeEditForm
