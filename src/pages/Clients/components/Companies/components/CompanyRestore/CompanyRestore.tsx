import React, { FC, useContext } from 'react'

import CompaniesActionsContext from '../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useCompanyRestore from './hooks/useCompanyRestore'

// TODO: Move to l10n
const CompanyRestore: FC = () => {
    const state = useContext(CompaniesActionsContext)
    const { onClickConfirm, onClickCancel } = useCompanyRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление компании"
            content="Вы уверены, что хотите восстановить компанию?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default CompanyRestore
