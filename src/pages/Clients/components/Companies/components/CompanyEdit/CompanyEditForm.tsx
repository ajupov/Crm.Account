import React, { FC, useContext } from 'react'

import CompanyContext from '../../contexts/CompanyContext/CompanyContext'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useCompaniesActions from '../../contexts/CompaniesActionsContext/hooks/useCompaniesActions'
import useCompanyEdit from './hooks/useCompanyEdit'

const CompanyEditForm: FC = () => {
    const state = useContext(CompanyContext)
    const { isLoading } = useCompaniesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useCompanyEdit()

    return state.company.id ? (
        <EditForm
            id={state.company.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.company.createDateTime}
            lastModifyDateTime={state.company.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CompanyEditForm
