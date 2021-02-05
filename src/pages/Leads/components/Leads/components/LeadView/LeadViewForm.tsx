import React, { FC, useContext } from 'react'

import LeadContext from '../../contexts/LeadContext/LeadContext'
import LeadsRoutes from '../../routes/LeadsRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useLeadView from './hooks/useLeadView'
import useLeadsActions from '../../contexts/LeadsActionsContext/hooks/useLeadsActions'

const LeadViewForm: FC = () => {
    const state = useContext(LeadContext)
    const { isLoading } = useLeadsActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useLeadView()

    return (
        <View
            id={state.lead.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.lead.isDeleted}
            createDate={state.lead.createDateTime}
            lastModifyDateTime={state.lead.modifyDateTime}
            data={map(state.lead)}
            editLink={LeadsRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={LeadsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadViewForm
