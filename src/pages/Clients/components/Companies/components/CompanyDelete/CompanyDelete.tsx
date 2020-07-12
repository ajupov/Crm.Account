import React, { FC, useContext } from 'react'

import CompaniesActionsContext from '../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import useCompanyDelete from './hooks/useCompanyDelete'

// TODO: Move to l10n
const CompanyDelete: FC = () => {
    const state = useContext(CompaniesActionsContext)
    const { onClickConfirm, onClickCancel } = useCompanyDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление компании"
            content="Вы уверены, что хотите удалить компанию?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyDelete
