import { useCallback, useContext } from 'react'

import ProductStatus from '../../../../../../../../api/products/models/ProductStatus'
import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseProductStatusViewReturn {
    map: (status: ProductStatus) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

const useProductStatusView = (): UseProductStatusViewReturn => {
    const history = useHistory()
    const state = useContext(ProductStatusesActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ProductStatusesRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${ProductStatusesRoutes.Changes}/${id}`), [
        history
    ])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (status: ProductStatus): ViewDataProps[] => [
            { label: 'Наименование', value: status.name },
            { label: 'Удален', value: status.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductStatusView
