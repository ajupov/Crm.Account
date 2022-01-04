import React, { FC, useContext } from 'react'

import StockBalanceContext from '../../contexts/StockBalanceContext/StockBalanceContext'
import StockBalancesRoutes from '../../routes/StockBalancesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useStockBalanceView from './hooks/useStockBalanceView'
import useStockBalancesActions from '../../contexts/StockBalancesActionsContext/hooks/useStockBalancesActions'

const StockBalanceViewForm: FC = () => {
    const state = useContext(StockBalanceContext)
    const { isLoading } = useStockBalancesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useStockBalanceView()

    return (
        <View
            id={state.stockBalance.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.stockBalance.isDeleted}
            createDate={state.stockBalance.createDateTime}
            lastModifyDateTime={state.stockBalance.modifyDateTime}
            data={map(state.stockBalance)}
            editLink={StockBalancesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={StockBalancesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockBalanceViewForm
