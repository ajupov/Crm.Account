import React, { FC, useContext } from 'react'

import CompaniesRoutes from '../../routes/CompaniesRoutes'
import CompanyContext from '../../contexts/CompanyContext/CompanyContext'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useCompaniesActions from '../../contexts/CompaniesActionsContext/hooks/useCompaniesActions'
import useCompanyEdit from './hooks/useCompanyEdit'

const CompanyEditForm: FC = () => {
    const state = useContext(CompanyContext)
    const { isLoading } = useCompaniesActions()
    const { fields, isConfirmEnabled, onClickCancel, onClickConfirm } = useCompanyEdit()

    return state.company.id ? (
        <EditForm
            id={state.company.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.company.createDateTime}
            lastModifyDateTime={state.company.modifyDateTime}
            historyLink={CompaniesRoutes.Changes}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CompanyEditForm
