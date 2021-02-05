import React, { FC, useContext } from 'react'

import LeadsActionsContext from '../../contexts/LeadsActionsContext/LeadsActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useLeadRestore from './hooks/useLeadRestore'

// TODO: Move to l10n
const LeadRestore: FC = () => {
    const state = useContext(LeadsActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление лида"
            content="Вы уверены, что хотите восстановить лида?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default LeadRestore
