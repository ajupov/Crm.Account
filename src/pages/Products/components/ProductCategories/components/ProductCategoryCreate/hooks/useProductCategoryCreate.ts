import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFieldProps } from '../../../../../../../components/Create/Create'
import ProductCategoryContext from '../../../contexts/ProductCategoryContext/ProductCategoryContext'
import { useHistory } from 'react-router'

interface UseProductCategoryCreateReturn {
    fields: CreateFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryCreate = (): UseProductCategoryCreateReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoryContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState<boolean>(false)

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
        await state.create()
        history.push('/products/categories')
    }, [state, history])

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    const fields: CreateFieldProps[] = useMemo(
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

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useProductCategoryCreate
