import React, { FC, useContext } from 'react'

import DeleteModal from '../../../../../components/common/modals/DeleteModal/DeleteModal'
import StockConsumptionsActionsContext from '../../contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContext'
import useStockConsumptionDelete from './hooks/useStockConsumptionDelete'

// TODO: Move to l10n
const StockConsumptionDelete: FC = () => {
    const state = useContext(StockConsumptionsActionsContext)
    const { onClickConfirm, onClickCancel } = useStockConsumptionDelete()

    return (
        <DeleteModal
            isDeleting={state.isDeleting}
            title="Удаление расхода"
            content="Вы уверены, что хотите удалить расход?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockConsumptionDelete
