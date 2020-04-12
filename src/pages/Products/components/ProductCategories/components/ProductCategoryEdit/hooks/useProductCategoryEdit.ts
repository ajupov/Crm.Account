import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../../contexts/ProductCategoryContext/ProductCategoryContext'
import { useHistory } from 'react-router'

interface UseProductCategoryEditReturn {
    onChangeName: (_: any, data: InputOnChangeData) => void
    onChangeIsDeleted: (_: any, data: CheckboxProps) => void
    onClickEdit: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryEdit = (): UseProductCategoryEditReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoryContext)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => state.setCategory({ ...state.category, name: data.value }),
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __: CheckboxProps) => state.setCategory({ ...state.category, isDeleted: !state.category.isDeleted }),
        [state]
    )

    const onClickEdit = useCallback((id: string) => history.push(`/products/categories/edit/${id}`), [history])

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.update()
        history.push('/products/categories')
    }, [state, history])

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    return {
        onChangeName,
        onChangeIsDeleted,
        onClickEdit,
        onClickConfirm,
        onClickCancel
    }
}

export default useProductCategoryEdit
