import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import StockRoomContext from '../../contexts/StockRoomContext/StockRoomContext'
import StockRoomsRoutes from '../../routes/StockRoomsRoutes'
import useStockRoomOnChange from '../../hooks/change/useStockRoomOnChange'
import useStockRoomsActions from '../../contexts/StockRoomsActionsContext/hooks/useStockRoomsActions'

const StockRoomEditForm: FC = () => {
    const state = useContext(StockRoomContext)
    const { isLoading } = useStockRoomsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useStockRoomOnChange()

    return state.room.id ? (
        <EditForm
            id={state.room.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.room.createDateTime}
            lastModifyDateTime={state.room.modifyDateTime}
            historyLink={StockRoomsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default StockRoomEditForm
