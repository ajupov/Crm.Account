import React, { FC, useContext } from 'react'

import LeadSourceContext from '../../contexts/LeadSourceContext/LeadSourceContext'
import LeadSourcesRoutes from '../../routes/LeadSourcesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useLeadSourceView from './hooks/useLeadSourceView'
import useLeadSourcesActions from '../../contexts/LeadSourcesActionsContext/hooks/useLeadSourcesActions'

const LeadSourceViewForm: FC = () => {
    const state = useContext(LeadSourceContext)
    const { isLoading } = useLeadSourcesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useLeadSourceView()

    return (
        <View
            id={state.source.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.source.isDeleted}
            createDate={state.source.createDateTime}
            lastModifyDateTime={state.source.modifyDateTime}
            data={map(state.source)}
            editLink={LeadSourcesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={LeadSourcesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadSourceViewForm
