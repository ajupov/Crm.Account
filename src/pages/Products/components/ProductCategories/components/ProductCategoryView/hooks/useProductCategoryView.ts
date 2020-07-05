import { useCallback, useContext } from 'react'

import ProductCategoriesActionsContext from '../../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import ProductCategoriesRoutes from '../../../routes/ProductCategoriesRoutes'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseProductCategoryViewReturn {
    map: (category: ProductCategory) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductCategoryView = (): UseProductCategoryViewReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoriesActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ProductCategoriesRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${ProductCategoriesRoutes.Changes}/${id}`), [
        history
    ])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (category: ProductCategory): ViewDataProps[] => [
            { label: 'Наименование', value: category.name },
            { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductCategoryView
