import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../../components/common/modals/DeleteModal/DeleteModal'
import LeadAttributesActionsContext from '../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContext'
import useLeadAttributeDelete from './hooks/useLeadAttributeDelete'

// TODO: Move to l10n
const LeadAttributeDelete: FC = () => {
    const state = useContext(LeadAttributesActionsContext)
    const { onClickConfirm, onClickCancel } = useLeadAttributeDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление атрибута"
            content="Вы уверены, что хотите удалить атрибут?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadAttributeDelete
