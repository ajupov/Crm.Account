import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getAttributeTypeName, getAttributeTypesAsSelectOptions } from '../../../../helpers/entityAttributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import CustomerAttributeContext from '../contexts/CustomerAttributeContext/CustomerAttributeContext'
import CustomerAttributeType from '../../../../../api/customers/models/CustomerAttributeType'
import { FormFieldProps } from '../../../../components/common/forms/FormField'
import { useHistory } from 'react-router'

interface UseCustomerAttributeOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerAttributeOnChange = (): UseCustomerAttributeOnChangeReturn => {
    const history = useHistory()
    const state = useContext(CustomerAttributeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setAttribute({ ...state.attribute, type: data.value as CustomerAttributeType })
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
                type: 'group',
                fields: [
                    {
                        type: 'dropdown',
                        required: true,
                        label: 'Тип',
                        width: '4',
                        value: state.attribute.type,
                        text: getAttributeTypeName(state.attribute.type),
                        options: getAttributeTypesAsSelectOptions(),
                        onChange: onChangeType
                    },
                    {
                        type: 'text',
                        required: true,
                        label: 'Наименование',
                        width: '12',
                        value: state.attribute.key,
                        onChange: onChangeKey
                    }
                ]
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

export default useCustomerAttributeOnChange
