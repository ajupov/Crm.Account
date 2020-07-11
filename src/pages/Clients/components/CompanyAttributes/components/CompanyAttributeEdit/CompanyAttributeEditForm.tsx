import React, { FC, useContext } from 'react'

import CompanyAttributeContext from '../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useCompanyAttributeEdit from './hooks/useCompanyAttributeEdit'
import useCompanyAttributesActions from '../../contexts/CompanyAttributesActionsContext/hooks/useCompanyAttributesActions'

const CompanyAttributeEditForm: FC = () => {
    const state = useContext(CompanyAttributeContext)
    const { isLoading } = useCompanyAttributesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useCompanyAttributeEdit()

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

export default CompanyAttributeEditForm
