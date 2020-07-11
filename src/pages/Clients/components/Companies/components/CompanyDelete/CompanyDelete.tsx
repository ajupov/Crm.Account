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
            title="Удаление контакта"
            content="Вы уверены, что хотите удалить контакт?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default CompanyDelete
