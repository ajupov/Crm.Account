import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import LeadSourcesActionsContext from '../../contexts/LeadSourcesActionsContext/LeadSourcesActionsContext'
import useLeadSourceDelete from './hooks/useLeadSourceDelete'

// TODO: Move to l10n
const LeadSourceDelete: FC = () => {
    const state = useContext(LeadSourcesActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadSourceDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление статуса"
            content="Вы уверены, что хотите удалить статус?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadSourceDelete
