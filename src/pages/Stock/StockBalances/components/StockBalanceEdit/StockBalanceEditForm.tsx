import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import StockBalanceContext from '../../contexts/StockBalanceContext/StockBalanceContext'
import StockBalancesRoutes from '../../routes/StockBalancesRoutes'
import useStockBalanceOnChange from '../../hooks/change/useStockBalanceOnChange'
import useStockBalancesActions from '../../contexts/StockBalancesActionsContext/hooks/useStockBalancesActions'

const StockBalanceEditForm: FC = () => {
    const state = useContext(StockBalanceContext)
    const { isLoading } = useStockBalancesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useStockBalanceOnChange()

    return state.stockBalance.id ? (
        <EditForm
            id={state.stockBalance.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.stockBalance.createDateTime}
            lastModifyDateTime={state.stockBalance.modifyDateTime}
            historyLink={StockBalancesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default StockBalanceEditForm
