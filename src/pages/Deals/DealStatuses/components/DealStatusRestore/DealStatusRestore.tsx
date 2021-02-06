import React, { FC, useContext } from 'react'

import DealStatusesActionsContext from '../../contexts/DealStatusesActionsContext/DealStatusesActionsContext'
import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import useDealStatusRestore from './hooks/useDealStatusRestore'

// TODO: Move to l10n
const DealStatusRestore: FC = () => {
    const state = useContext(DealStatusesActionsContext)
    const { onClickConfirm, onClickCancel } = useDealStatusRestore()

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

export default DealStatusRestore
