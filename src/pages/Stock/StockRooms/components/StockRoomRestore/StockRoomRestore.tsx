import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import StockRoomsActionsContext from '../../contexts/StockRoomsActionsContext/StockRoomsActionsContext'
import useStockRoomRestore from './hooks/useStockRoomRestore'

// TODO: Move to l10n
const StockRoomRestore: FC = () => {
    const state = useContext(StockRoomsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockRoomRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление склада"
            content="Вы уверены, что хотите восстановить склад?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default StockRoomRestore
