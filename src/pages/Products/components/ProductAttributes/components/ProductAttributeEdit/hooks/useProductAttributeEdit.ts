import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getAttributeTypeName,
    getAttributeTypesAsSelectOptions
} from '../../../../../../../helpers/attributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import AttributeType from '../../../../../../../../api/products/models/AttributeType'
import { EditFieldProps } from '../../../../../../../components/Edit/Edit'
import ProductAttributeContext from '../../../contexts/ProductAttributeContext/ProductAttributeContext'
import { ProductAttributesRoutes } from '../../../routes/ProductAttributesRoutes'
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

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setAttribute({ ...state.attribute, type: data.value as AttributeType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

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
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductAttributesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFieldProps[] = useMemo(
        () => [
            {
                type: 'select',
                required: true,
                label: 'Тип',
                value: state.attribute.type,
                text: getAttributeTypeName(state.attribute.type),
                options: getAttributeTypesAsSelectOptions(),
                onChange: onChangeType
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
        [
            onChangeIsDeleted,
            onChangeName,
            onChangeType,
            state.attribute.isDeleted,
            state.attribute.key,
            state.attribute.type
        ]
    )

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useProductAttributeEdit
