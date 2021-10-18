import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import CustomerContext from '../../contexts/CustomerContext/CustomerContext'
import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import useCustomerAttributesLoad from '../load/useCustomerAttributesLoad'
import useCustomerSourcesLoad from '../load/useCustomerSourcesLoad'
import { useHistory } from 'react-router'

interface UseCustomerOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerOnChange = (): UseCustomerOnChangeReturn => {
    const history = useHistory()
    const state = useContext(CustomerContext)
    const { sourcesAsOptions } = useCustomerSourcesLoad()
    const { attributesAsOptions } = useCustomerAttributesLoad()
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeSourceId = useCallback(
        (_, data: DropdownProps) => {
            state.setCustomer({ ...state.customer, sourceId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSurname = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, surname: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePatronymic = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, patronymic: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeBirthDate = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, birthDate: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.customer.attributeLinks) {
                return
            }

            state.customer.attributeLinks[index].customerAttributeId = value

            state.setCustomer({
                ...state.customer
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.customer.attributeLinks) {
                return
            }

            const newLinks = [...state.customer.attributeLinks]

            newLinks[index].value = value

            state.setCustomer({
                ...state.customer,
                attributeLinks: newLinks
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setCustomer({
                ...state.customer,
                attributeLinks: state.customer.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setCustomer({ ...state.customer, attributeLinks: [...(state.customer.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setCustomer({ ...state.customer, isDeleted: !state.customer.isDeleted })
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
                        label: 'Источник',
                        width: '4',
                        value: state.customer.sourceId,
                        options: sourcesAsOptions,
                        onChange: onChangeSourceId
                    },
                    {
                        type: 'text',
                        label: 'Телефон',
                        width: '4',
                        value: state.customer.phone,
                        onChange: onChangePhone
                    },
                    {
                        type: 'text',
                        label: 'Email',
                        width: '8',
                        value: state.customer.email,
                        onChange: onChangeEmail
                    }
                ]
            },
            {
                type: 'group',
                fields: [
                    {
                        type: 'text',
                        label: 'Фамилия',
                        width: '4',
                        value: state.customer.surname,
                        onChange: onChangeSurname
                    },
                    {
                        type: 'text',
                        label: 'Имя',
                        width: '4',
                        value: state.customer.name,
                        onChange: onChangeName
                    },
                    {
                        type: 'text',
                        label: 'Отчество',
                        width: '4',
                        value: state.customer.patronymic,
                        onChange: onChangePatronymic
                    },
                    {
                        type: 'date',
                        label: 'Дата рождения',
                        width: '4',
                        value: state.customer.birthDate,
                        onChange: onChangeBirthDate
                    }
                ]
            },

            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.customer.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.customerAttributeId ?? '',
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
                checked: state.customer.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.customer.sourceId,
            state.customer.surname,
            state.customer.name,
            state.customer.patronymic,
            state.customer.phone,
            state.customer.email,
            state.customer.birthDate,
            state.customer.attributeLinks,
            state.customer.isDeleted,
            sourcesAsOptions,
            onChangeSourceId,
            onChangeSurname,
            onChangeName,
            onChangePatronymic,
            onChangePhone,
            onChangeEmail,
            onChangeBirthDate,
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

export default useCustomerOnChange
