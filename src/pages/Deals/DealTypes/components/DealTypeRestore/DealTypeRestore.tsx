import React, { FC, useContext } from 'react'

import DealTypesActionsContext from '../../contexts/DealTypesActionsContext/DealTypesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useDealTypeRestore from './hooks/useDealTypeRestore'

// TODO: Move to l10n
const DealTypeRestore: FC = () => {
    const state = useContext(DealTypesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealTypeRestore()

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

export default DealTypeRestore
