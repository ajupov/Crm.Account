import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import StockConsumptionContext from '../../contexts/StockConsumptionContext/StockConsumptionContext'
import StockConsumptionsRoutes from '../../routes/StockConsumptionsRoutes'
import useStockConsumptionOnChange from '../../hooks/change/useStockConsumptionOnChange'
import useStockConsumptionsActions from '../../contexts/StockConsumptionsActionsContext/hooks/useStockConsumptionsActions'

const StockConsumptionEditForm: FC = () => {
    const state = useContext(StockConsumptionContext)
    const { isLoading } = useStockConsumptionsActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useStockConsumptionOnChange()

    return state.stockConsumption.id ? (
        <EditForm
            id={state.stockConsumption.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.stockConsumption.createDateTime}
            lastModifyDateTime={state.stockConsumption.modifyDateTime}
            historyLink={StockConsumptionsRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default StockConsumptionEditForm
