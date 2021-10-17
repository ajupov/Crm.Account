import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getAttributeTypeName,
    getAttributeTypesAsSelectOptions
} from '../../../../../helpers/entityAttributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import ProductAttributeContext from '../../contexts/ProductAttributeContext/ProductAttributeContext'
import ProductAttributeType from '../../../../../../api/products/models/ProductAttributeType'
import { useHistory } from 'react-router'

interface UseProductAttributeOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductAttributeOnChange = (): UseProductAttributeOnChangeReturn => {
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

    const onChangeKey = useCallback(
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

    const onClickConfirmCreate = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickConfirmUpdate = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: FormFieldProps[] = useMemo(
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
                label: 'Наименование',
                value: state.attribute.key,
                onChange: onChangeKey
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.attribute.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            onChangeType,
            onChangeKey,
            onChangeIsDeleted,
            state.attribute.type,
            state.attribute.key,
            state.attribute.isDeleted
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useProductAttributeOnChange
