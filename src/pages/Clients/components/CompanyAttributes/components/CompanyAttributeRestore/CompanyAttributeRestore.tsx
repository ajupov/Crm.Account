import React, { FC, useContext } from 'react'

import CompanyAttributesActionsContext from '../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useCompanyAttributeRestore from './hooks/useCompanyAttributeRestore'

// TODO: Move to l10n
const CompanyAttributeRestore: FC = () => {
    const state = useContext(CompanyAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useCompanyAttributeRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление атрибута"
            content="Вы уверены, что хотите восстановить атрибут?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default CompanyAttributeRestore
