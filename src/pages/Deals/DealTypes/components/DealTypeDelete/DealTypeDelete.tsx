import React, { FC, useContext } from 'react'

import DealTypesActionsContext from '../../contexts/DealTypesActionsContext/DealTypesActionsContext'
import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import useDealTypeDelete from './hooks/useDealTypeDelete'

// TODO: Move to l10n
const DealTypeDelete: FC = () => {
    const state = useContext(DealTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealTypeDelete()

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

export default DealTypeDelete
