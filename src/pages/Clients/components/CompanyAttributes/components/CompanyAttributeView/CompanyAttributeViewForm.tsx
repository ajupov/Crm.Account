import React, { FC, useContext } from 'react'

import CompanyAttributeContext from '../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import CompanyAttributesRoutes from '../../routes/CompanyAttributesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useCompanyAttributeView from './hooks/useCompanyAttributeView'
import useCompanyAttributesActions from '../../contexts/CompanyAttributesActionsContext/hooks/useCompanyAttributesActions'

const CompanyAttributeViewForm: FC = () => {
    const state = useContext(CompanyAttributeContext)
    const { isLoading } = useCompanyAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useCompanyAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={CompanyAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={CompanyAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyAttributeViewForm
