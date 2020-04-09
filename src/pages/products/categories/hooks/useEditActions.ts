import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../contexts/ProductCategoryContext'
import { toBoolean } from '../../../../helpers/booleanHelper'
import { useHistory } from 'react-router'

interface UseEditActionsReturn {
    name: string | undefined
    onChangeName: (_: any, data: InputOnChangeData) => void
    isDeleted: boolean | undefined
    onChangeIsDeleted: (_: any, data: CheckboxProps) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useEditActions = (): UseEditActionsReturn => {
    const history = useHistory()
    const context = useContext(ProductCategoryContext)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => context.setCategory({ ...context.category, name: data.value }),
        [context]
    )

    const onChangeIsDeleted = useCallback(
        (_, data: CheckboxProps) => context.setCategory({ ...context.category, isDeleted: toBoolean(data.value) }),
        [context]
    )

    const onClickConfirm = useCallback((): void => {
        context.save()
        history.push('/products/categories')
    }, [context, history])

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    return {
        name: context.category.name,
        onChangeName,
        isDeleted: context.category.isDeleted,
        onChangeIsDeleted,
        onClickConfirm,
        onClickCancel
    }
}

export default useEditActions
