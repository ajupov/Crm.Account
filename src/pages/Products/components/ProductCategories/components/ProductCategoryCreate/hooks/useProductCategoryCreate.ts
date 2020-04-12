import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../../contexts/ProductCategoryContext'
import { toBoolean } from '../../../../../../../utils/boolean/booleanUtils'
import { useHistory } from 'react-router'

interface UseProductCategoryCreateReturn {
    onChangeName: (_: any, data: InputOnChangeData) => void
    onChangeIsDeleted: (_: any, data: CheckboxProps) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryCreate = (): UseProductCategoryCreateReturn => {
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

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.create()
        history.push('/products/categories')
    }, [state, history])

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    return {
        onChangeName,
        onChangeIsDeleted,
        onClickConfirm,
        onClickCancel
    }
}

export default useProductCategoryCreate
