import React, { FC, useContext } from 'react'

import CompanyAttributeContext from '../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import CompanyAttributesRoutes from '../../routes/CompanyAttributesRoutes'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useCompanyAttributeOnChange from '../../hooks/useCompanyAttributeOnChange'
import useCompanyAttributesActions from '../../contexts/CompanyAttributesActionsContext/hooks/useCompanyAttributesActions'

const CompanyAttributeEditForm: FC = () => {
    const state = useContext(CompanyAttributeContext)
    const { isLoading } = useCompanyAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useCompanyAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={CompanyAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CompanyAttributeEditForm
