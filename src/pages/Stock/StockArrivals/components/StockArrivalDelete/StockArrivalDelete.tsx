import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import StockArrivalsActionsContext from '../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContext'
import useStockArrivalDelete from './hooks/useStockArrivalDelete'

// TODO: Move to l10n
const StockArrivalDelete: FC = () => {
    const state = useContext(StockArrivalsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockArrivalDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление прихода"
            content="Вы уверены, что хотите удалить приход?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockArrivalDelete
