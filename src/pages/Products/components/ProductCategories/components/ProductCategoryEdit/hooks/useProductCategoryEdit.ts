import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFieldProps } from '../../../../../../../components/Edit/Edit'
import { ProductCategoriesRoutes } from '../../../routes/ProductCategoriesRoutes'
import ProductCategoryContext from '../../../contexts/ProductCategoryContext/ProductCategoryContext'
import { useHistory } from 'react-router'

interface UseProductCategoryEditReturn {
    fields: EditFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryEdit = (): UseProductCategoryEditReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoryContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCategory({ ...state.category, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __: CheckboxProps) => {
            state.setCategory({ ...state.category, isDeleted: !state.category.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.update()
        history.push(ProductCategoriesRoutes.Index)
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductCategoriesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFieldProps[] = useMemo(
        () => [
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.category.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.category.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.category.isDeleted, state.category.name]
    )

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useProductCategoryEdit
