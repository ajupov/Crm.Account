import { useCallback, useContext } from 'react'

import DealStatus from '../../../../../../../api/deals/models/DealStatus'
import DealStatusesActionsContext from '../../../contexts/DealStatusesActionsContext/DealStatusesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseDealStatusViewReturn {
    map: (status: DealStatus) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useDealStatusView = (): UseDealStatusViewReturn => {
    const history = useHistory()
    const state = useContext(DealStatusesActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (status: DealStatus): ViewDataProps[] => [
            { label: 'Наименование', value: status.name },
            { label: 'Конечный', value: status.isFinish ? 'Да' : 'Нет' },
            { label: 'Удален', value: status.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useDealStatusView
