import { useCallback, useContext } from 'react'

import DealType from '../../../../../../../api/deals/models/DealType'
import DealTypesActionsContext from '../../../contexts/DealTypesActionsContext/DealTypesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseDealTypeViewReturn {
    map: (type: DealType) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useDealTypeView = (): UseDealTypeViewReturn => {
    const history = useHistory()
    const state = useContext(DealTypesActionsContext)

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
        (type: DealType): ViewDataProps[] => [
            { label: 'Наименование', value: type.name },
            { label: 'Удален', value: type.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useDealTypeView
