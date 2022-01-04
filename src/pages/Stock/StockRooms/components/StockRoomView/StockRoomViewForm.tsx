import React, { FC, useContext } from 'react'

import StockRoomContext from '../../contexts/StockRoomContext/StockRoomContext'
import StockRoomsRoutes from '../../routes/StockRoomsRoutes'
import View from '../../../../../components/common/grids/View/View'
import useStockRoomView from './hooks/useStockRoomView'
import useStockRoomsActions from '../../contexts/StockRoomsActionsContext/hooks/useStockRoomsActions'

const StockRoomViewForm: FC = () => {
    const state = useContext(StockRoomContext)
    const { isLoading } = useStockRoomsActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useStockRoomView()

    return (
        <View
            id={state.room.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.room.isDeleted}
            createDate={state.room.createDateTime}
            lastModifyDateTime={state.room.modifyDateTime}
            data={map(state.room)}
            editLink={StockRoomsRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={StockRoomsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockRoomViewForm
