import React, { FC, useContext } from 'react'

import CompaniesRoutes from '../../routes/CompaniesRoutes'
import CompanyContext from '../../contexts/CompanyContext/CompanyContext'
import View from '../../../../../../components/common/grids/View/View'
import useCompaniesActions from '../../contexts/CompaniesActionsContext/hooks/useCompaniesActions'
import useCompanyView from './hooks/useCompanyView'

const CompanyViewForm: FC = () => {
    const state = useContext(CompanyContext)
    const { isLoading } = useCompaniesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useCompanyView()

    return (
        <View
            id={state.company.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.company.isDeleted}
            createDate={state.company.createDateTime}
            lastModifyDateTime={state.company.modifyDateTime}
            data={map(state.company)}
            editLink={CompaniesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={CompaniesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyViewForm
