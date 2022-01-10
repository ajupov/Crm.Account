import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import StockArrivalContext from '../../contexts/StockArrivalContext/StockArrivalContext'
import StockArrivalsRoutes from '../../routes/StockArrivalsRoutes'
import useStockArrivalOnChange from '../../hooks/change/useStockArrivalOnChange'
import useStockArrivalsActions from '../../contexts/StockArrivalsActionsContext/hooks/useStockArrivalsActions'

const StockArrivalEditForm: FC = () => {
    const state = useContext(StockArrivalContext)
    const { isLoading } = useStockArrivalsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useStockArrivalOnChange()

    return state.stockArrival.id ? (
        <EditForm
            id={state.stockArrival.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.stockArrival.createDateTime}
            lastModifyDateTime={state.stockArrival.modifyDateTime}
            historyLink={StockArrivalsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default StockArrivalEditForm
