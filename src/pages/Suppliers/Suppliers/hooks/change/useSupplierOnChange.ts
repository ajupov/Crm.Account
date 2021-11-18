import { useCallback, useContext, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import { InputOnChangeData } from 'semantic-ui-react'
import SupplierContext from '../../contexts/SupplierContext/SupplierContext'
import { useHistory } from 'react-router'
import useSupplierAttributesLoad from '../load/useSupplierAttributesLoad'

interface UseSupplierOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useSupplierOnChange = (): UseSupplierOnChangeReturn => {
    const history = useHistory()
    const state = useContext(SupplierContext)
    const { attributesAsOptions } = useSupplierAttributesLoad()
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setSupplier({ ...state.supplier, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data: InputOnChangeData) => {
            state.setSupplier({ ...state.supplier, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data: InputOnChangeData) => {
            state.setSupplier({ ...state.supplier, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.supplier.attributeLinks) {
                return
            }

            state.supplier.attributeLinks[index].supplierAttributeId = value

            state.setSupplier({
                ...state.supplier
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.supplier.attributeLinks) {
                return
            }

            const newLinks = [...state.supplier.attributeLinks]

            newLinks[index].value = value

            state.setSupplier({
                ...state.supplier,
                attributeLinks: newLinks
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setSupplier({
                ...state.supplier,
                attributeLinks: state.supplier.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setSupplier({ ...state.supplier, attributeLinks: [...(state.supplier.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setSupplier({ ...state.supplier, isDeleted: !state.supplier.isDeleted })
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
                        type: 'text',
                        label: 'Телефон',
                        width: '4',
                        value: state.supplier.phone,
                        onChange: onChangePhone
                    },
                    {
                        type: 'text',
                        label: 'Email',
                        width: '8',
                        value: state.supplier.email,
                        onChange: onChangeEmail
                    }
                ]
            },
            {
                type: 'group',
                fields: [
                    {
                        type: 'text',
                        label: 'Название',
                        width: '4',
                        value: state.supplier.name,
                        onChange: onChangeName
                    }
                ]
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.supplier.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.supplierAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
                    onChangeValue: onChangeAttributeValue,
                    onClickDelete: onDeleteAttribute
                })),
                onClickAddItem: onClickAddAttributeItem
            },

            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.supplier.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.supplier.name,
            state.supplier.phone,
            state.supplier.email,
            state.supplier.attributeLinks,
            state.supplier.isDeleted,
            onChangeName,
            onChangePhone,
            onChangeEmail,
            attributesAsOptions,
            onClickAddAttributeItem,
            onChangeIsDeleted,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onDeleteAttribute
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useSupplierOnChange
