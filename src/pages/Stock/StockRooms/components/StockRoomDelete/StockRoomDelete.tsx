import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import StockRoomsActionsContext from '../../contexts/StockRoomsActionsContext/StockRoomsActionsContext'
import useStockRoomDelete from './hooks/useStockRoomDelete'

// TODO: Move to l10n
const StockRoomDelete: FC = () => {
    const state = useContext(StockRoomsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockRoomDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление склада"
            content="Вы уверены, что хотите удалить склад?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockRoomDelete
