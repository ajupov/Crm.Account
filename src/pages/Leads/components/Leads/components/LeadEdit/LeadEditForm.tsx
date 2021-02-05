import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import LeadContext from '../../contexts/LeadContext/LeadContext'
import LeadsRoutes from '../../routes/LeadsRoutes'
import useLeadOnChange from '../../hooks/change/useLeadOnChange'
import useLeadsActions from '../../contexts/LeadsActionsContext/hooks/useLeadsActions'

const LeadEditForm: FC = () => {
    const state = useContext(LeadContext)
    const { isLoading } = useLeadsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useLeadOnChange()

    return state.lead.id ? (
        <EditForm
            id={state.lead.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.lead.createDateTime}
            lastModifyDateTime={state.lead.modifyDateTime}
            historyLink={LeadsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default LeadEditForm
