import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import StockBalancesActionsContext from '../../contexts/StockBalancesActionsContext/StockBalancesActionsContext'
import useStockBalanceRestore from './hooks/useStockBalanceRestore'

// TODO: Move to l10n
const StockBalanceRestore: FC = () => {
    const state = useContext(StockBalancesActionsContext)
    const { onClickConfirm, onClickCancel } = useStockBalanceRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление баланса"
            content="Вы уверены, что хотите восстановить баланс?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default StockBalanceRestore
