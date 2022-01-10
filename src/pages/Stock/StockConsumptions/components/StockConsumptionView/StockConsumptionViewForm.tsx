import React, { FC, useContext } from 'react'

import StockConsumptionContext from '../../contexts/StockConsumptionContext/StockConsumptionContext'
import StockConsumptionsRoutes from '../../routes/StockConsumptionsRoutes'
import View from '../../../../../components/common/grids/View/View'
import useStockConsumptionView from './hooks/useStockConsumptionView'
import useStockConsumptionsActions from '../../contexts/StockConsumptionsActionsContext/hooks/useStockConsumptionsActions'

const StockConsumptionViewForm: FC = () => {
    const state = useContext(StockConsumptionContext)
    const { isLoading } = useStockConsumptionsActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useStockConsumptionView()

    return (
        <View
            id={state.stockConsumption.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.stockConsumption.isDeleted}
            createDate={state.stockConsumption.createDateTime}
            lastModifyDateTime={state.stockConsumption.modifyDateTime}
            data={map(state.stockConsumption)}
            editLink={StockConsumptionsRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={StockConsumptionsRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockConsumptionViewForm
