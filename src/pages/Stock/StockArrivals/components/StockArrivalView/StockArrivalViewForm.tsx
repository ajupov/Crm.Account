import React, { FC, useContext } from 'react'

import StockArrivalContext from '../../contexts/StockArrivalContext/StockArrivalContext'
import StockArrivalsRoutes from '../../routes/StockArrivalsRoutes'
import View from '../../../../../components/common/grids/View/View'
import useStockArrivalView from './hooks/useStockArrivalView'
import useStockArrivalsActions from '../../contexts/StockArrivalsActionsContext/hooks/useStockArrivalsActions'

const StockArrivalViewForm: FC = () => {
    const state = useContext(StockArrivalContext)
    const { isLoading } = useStockArrivalsActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useStockArrivalView()

    return (
        <View
            id={state.stockArrival.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.stockArrival.isDeleted}
            createDate={state.stockArrival.createDateTime}
            lastModifyDateTime={state.stockArrival.modifyDateTime}
            data={map(state.stockArrival)}
            editLink={StockArrivalsRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={StockArrivalsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockArrivalViewForm
