import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFieldProps } from '../../../../../../../components/Edit/Edit'
import ProductAttributeContext from '../../../contexts/ProductAttributeContext/ProductAttributeContext'
import { ProductAttributesRoutes } from '../../../routes/ProductAttributesRoutes'
import { getAttributeTypeName } from '../../../../../../../helpers/attributeTypeHelper'
import { useHistory } from 'react-router'

interface UseProductAttributeEditReturn {
    fields: EditFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductAttributeEdit = (): UseProductAttributeEditReturn => {
    const history = useHistory()
    const state = useContext(ProductAttributeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setAttribute({ ...state.attribute, key: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __: CheckboxProps) => {
            state.setAttribute({ ...state.attribute, isDeleted: !state.attribute.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.update()
        history.push(ProductAttributesRoutes.Index)
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductAttributesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFieldProps[] = useMemo(
        () => [
            {
                type: 'text',
                required: true,
                topLabel: 'Тип',
                value: getAttributeTypeName(state.attribute.type),
                onChange: onChangeName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.attribute.key,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.attribute.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.attribute.isDeleted, state.attribute.key, state.attribute.type]
    )

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useProductAttributeEdit
