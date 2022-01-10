import React, { FC, useContext } from 'react'

import RestoreModal from '../../../../../components/common/modals/RestoreModal/RestoreModal'
import StockArrivalsActionsContext from '../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContext'
import useStockArrivalRestore from './hooks/useStockArrivalRestore'

// TODO: Move to l10n
const StockArrivalRestore: FC = () => {
    const state = useContext(StockArrivalsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockArrivalRestore()

    return (
        <RestoreModal
            isRestoring={state.isRestoring}
            title="Восстановление прихода"
            content="Вы уверены, что хотите восстановить приход?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default StockArrivalRestore
