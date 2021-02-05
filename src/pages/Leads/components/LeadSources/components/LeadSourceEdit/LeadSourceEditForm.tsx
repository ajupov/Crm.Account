import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import LeadSourceContext from '../../contexts/LeadSourceContext/LeadSourceContext'
import LeadSourcesRoutes from '../../routes/LeadSourcesRoutes'
import useLeadSourceOnChange from '../../hooks/change/useLeadSourceOnChange'
import useLeadSourcesActions from '../../contexts/LeadSourcesActionsContext/hooks/useLeadSourcesActions'

const LeadSourceEditForm: FC = () => {
    const state = useContext(LeadSourceContext)
    const { isLoading } = useLeadSourcesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useLeadSourceOnChange()

    return state.source.id ? (
        <EditForm
            id={state.source.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.source.createDateTime}
            lastModifyDateTime={state.source.modifyDateTime}
            historyLink={LeadSourcesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default LeadSourceEditForm
