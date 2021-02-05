import React, { FC, useContext } from 'react'

import LeadAttributeContext from '../../contexts/LeadAttributeContext/LeadAttributeContext'
import LeadAttributesRoutes from '../../routes/LeadAttributesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useLeadAttributeView from './hooks/useLeadAttributeView'
import useLeadAttributesActions from '../../contexts/LeadAttributesActionsContext/hooks/useLeadAttributesActions'

const LeadAttributeViewForm: FC = () => {
    const state = useContext(LeadAttributeContext)
    const { isLoading } = useLeadAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useLeadAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={LeadAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={LeadAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadAttributeViewForm
