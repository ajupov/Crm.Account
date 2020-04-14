import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import { ViewDataProps } from '../../../../../../../components/View/View'
import { useHistory } from 'react-router'

interface UseProductCategoryViewReturn {
    map: (category: ProductCategory) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

const useProductCategoryView = (): UseProductCategoryViewReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)

    const onClickEdit = useCallback((id: string) => history.push(`/products/categories/edit/${id}`), [history])

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

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    const map = useCallback(
        (category: ProductCategory): ViewDataProps[] => [
            { label: 'Наименование', value: category.name },
            { label: 'Удален', value: category.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel }
}

export default useProductCategoryView
