import React, { FC, useContext } from 'react'

import DealStatusesActionsContext from '../../contexts/DealStatusesActionsContext/DealStatusesActionsContext'
import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import useDealStatusDelete from './hooks/useDealStatusDelete'

// TODO: Move to l10n
const DealStatusDelete: FC = () => {
    const state = useContext(DealStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealStatusDelete()

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

export default DealStatusDelete
