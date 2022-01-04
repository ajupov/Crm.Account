import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import StockBalancesActionsContext from '../../contexts/StockBalancesActionsContext/StockBalancesActionsContext'
import useStockBalanceDelete from './hooks/useStockBalanceDelete'

// TODO: Move to l10n
const StockBalanceDelete: FC = () => {
    const state = useContext(StockBalancesActionsContext)
    const { onClickConfirm, onClickCancel } = useStockBalanceDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление баланса"
            content="Вы уверены, что хотите удалить баланс?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockBalanceDelete
