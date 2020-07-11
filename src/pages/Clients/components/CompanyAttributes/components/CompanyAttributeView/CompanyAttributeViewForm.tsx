import React, { FC, useContext } from 'react'

import CompanyAttributeContext from '../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import View from '../../../../../../components/common/grids/View/View'
import useCompanyAttributeView from './hooks/useCompanyAttributeView'
import useCompanyAttributesActions from '../../contexts/CompanyAttributesActionsContext/hooks/useCompanyAttributesActions'

const CompanyAttributeViewForm: FC = () => {
    const state = useContext(CompanyAttributeContext)
    const { isLoading } = useCompanyAttributesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useCompanyAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyAttributeViewForm
