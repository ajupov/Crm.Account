import React, { FC, useContext } from 'react'

import LeadAttributesActionsContext from '../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useLeadAttributeRestore from './hooks/useLeadAttributeRestore'

// TODO: Move to l10n
const LeadAttributeRestore: FC = () => {
    const state = useContext(LeadAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadAttributeRestore()

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

export default LeadAttributeRestore
