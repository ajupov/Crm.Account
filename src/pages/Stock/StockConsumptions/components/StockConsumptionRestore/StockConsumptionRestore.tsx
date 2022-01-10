import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import StockConsumptionsActionsContext from '../../contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContext'
import useStockConsumptionRestore from './hooks/useStockConsumptionRestore'

// TODO: Move to l10n
const StockConsumptionRestore: FC = () => {
    const state = useContext(StockConsumptionsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockConsumptionRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление расхода"
            content="Вы уверены, что хотите восстановить расход?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default StockConsumptionRestore
