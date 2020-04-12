import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import { toBoolean } from '../../../../../utils/boolean/booleanUtils'
import { useHistory } from 'react-router'

interface UseProductCategoryEditReturn {
    name: string | undefined
    onChangeName: (_: any, data: InputOnChangeData) => void
    isDeleted: boolean | undefined
    onChangeIsDeleted: (_: any, data: CheckboxProps) => void
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
        (_, data: CheckboxProps) => state.setCategory({ ...state.category, isDeleted: toBoolean(data.value) }),
        [state]
    )

    const onClickConfirm = useCallback((): void => {
        state.create()
        history.push('/products/categories')
    }, [state, history])

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    return {
        name: state.category.name,
        onChangeName,
        isDeleted: state.category.isDeleted,
        onChangeIsDeleted,
        onClickConfirm,
        onClickCancel
    }
}

export default useProductCategoryEdit
