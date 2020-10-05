import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getAttributeTypeName,
    getAttributeTypesAsSelectOptions
} from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFormFieldProps } from '../../../../../../../components/common/forms/EditForm/EditForm'
import ProductAttributeContext from '../../../contexts/ProductAttributeContext/ProductAttributeContext'
import ProductAttributeType from '../../../../../../../../api/products/models/ProductAttributeType'
import { useHistory } from 'react-router'

interface UseProductAttributeEditReturn {
    fields: EditFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductAttributeEdit = (): UseProductAttributeEditReturn => {
    const history = useHistory()
    const state = useContext(ProductAttributeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setAttribute({ ...state.attribute, type: data.value as ProductAttributeType })
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
        (_, __) => {
            state.setAttribute({ ...state.attribute, isDeleted: !state.attribute.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: EditFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
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

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useProductAttributeEdit
