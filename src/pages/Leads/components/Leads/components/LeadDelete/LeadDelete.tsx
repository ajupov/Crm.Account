import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import LeadsActionsContext from '../../contexts/LeadsActionsContext/LeadsActionsContext'
import useLeadDelete from './hooks/useLeadDelete'

// TODO: Move to l10n
const LeadDelete: FC = () => {
    const state = useContext(LeadsActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление лида"
            content="Вы уверены, что хотите удалить лида?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadDelete
