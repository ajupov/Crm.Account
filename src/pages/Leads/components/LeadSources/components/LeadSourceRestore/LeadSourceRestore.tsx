import React, { FC, useContext } from 'react'

import LeadSourcesActionsContext from '../../contexts/LeadSourcesActionsContext/LeadSourcesActionsContext'
import RestoreModal from '../../../../../../components/common/modals/RestoreModal/RestoreModal'
import useLeadSourceRestore from './hooks/useLeadSourceRestore'

// TODO: Move to l10n
const LeadSourceRestore: FC = () => {
    const state = useContext(LeadSourcesActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadSourceRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление статуса"
            content="Вы уверены, что хотите восстановить статус?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default LeadSourceRestore
