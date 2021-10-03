import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../../components/common/forms/CreateForm/CreateForm'
import CustomerContext from '../../contexts/CustomerContext/CustomerContext'
import { useHistory } from 'react-router'
import useCustomerAttributesLoad from '../load/useCustomerAttributesLoad'
import useCustomerSourcesLoad from '../load/useCustomerSourcesLoad'

interface UseCustomerOnChangeReturn {
    fields: CreateFormFieldProps[]
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

    const onChangePost = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, post: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePostcode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, postcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCountry = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, country: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegion = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, region: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProvince = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, province: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCity = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, city: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStreet = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, street: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeHouse = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, house: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeApartment = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, apartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeOpportunitySum = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCustomer({ ...state.customer, opportunitySum: parseInt(data.value, 10) })
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

    const fields: CreateFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
                required: true,
                label: 'Источник',
                value: state.customer.sourceId,
                options: sourcesAsOptions,
                onChange: onChangeSourceId
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Фамилия',
                value: state.customer.surname,
                onChange: onChangeSurname
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Имя',
                value: state.customer.name,
                onChange: onChangeName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Отчество',
                value: state.customer.patronymic,
                onChange: onChangePatronymic
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Телефон',
                value: state.customer.phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Email',
                value: state.customer.email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Должность',
                value: state.customer.post,
                onChange: onChangePost
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс',
                value: state.customer.postcode,
                onChange: onChangePostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна',
                value: state.customer.country,
                onChange: onChangeCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион',
                value: state.customer.region,
                onChange: onChangeRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция',
                value: state.customer.province,
                onChange: onChangeProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт',
                value: state.customer.city,
                onChange: onChangeCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица',
                value: state.customer.street,
                onChange: onChangeStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение',
                value: state.customer.house,
                onChange: onChangeHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира',
                value: state.customer.apartment,
                onChange: onChangeApartment
            },
            {
                type: 'number',
                required: true,
                topLabel: 'Сумма потенциальной сделки',
                value: state.customer.opportunitySum,
                onChange: onChangeOpportunitySum
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
            attributesAsOptions,
            onChangeApartment,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onChangeCity,
            onChangeCountry,
            onChangeEmail,
            onChangeHouse,
            onChangeIsDeleted,
            onChangeName,
            onChangeOpportunitySum,
            onChangePatronymic,
            onChangePhone,
            onChangePost,
            onChangePostcode,
            onChangeProvince,
            onChangeRegion,
            onChangeSourceId,
            onChangeStreet,
            onChangeSurname,
            onClickAddAttributeItem,
            onDeleteAttribute,
            sourcesAsOptions,
            state.customer.apartment,
            state.customer.attributeLinks,
            state.customer.city,
            state.customer.country,
            state.customer.email,
            state.customer.house,
            state.customer.isDeleted,
            state.customer.name,
            state.customer.opportunitySum,
            state.customer.patronymic,
            state.customer.phone,
            state.customer.post,
            state.customer.postcode,
            state.customer.province,
            state.customer.region,
            state.customer.sourceId,
            state.customer.street,
            state.customer.surname
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useCustomerOnChange
