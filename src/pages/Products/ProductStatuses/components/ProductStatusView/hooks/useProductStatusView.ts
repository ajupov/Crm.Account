import { useCallback, useContext } from 'react'

import ProductStatus from '../../../../../../../api/products/models/ProductStatus'
import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseProductStatusViewReturn {
    map: (status: ProductStatus) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductStatusView = (): UseProductStatusViewReturn => {
    const history = useHistory()
    const state = useContext(ProductStatusesActionsContext)

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
        (status: ProductStatus): ViewDataProps[] => [
            { label: 'Наименование', value: status.name },
            { label: 'Удален', value: status.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useProductStatusView
