import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../../components/common/forms/CreateForm/CreateForm'
import LeadContext from '../../contexts/LeadContext/LeadContext'
import { useHistory } from 'react-router'
import useLeadAttributesLoad from '../load/useLeadAttributesLoad'
import useLeadSourcesLoad from '../load/useLeadSourcesLoad'

interface UseLeadOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useLeadOnChange = (): UseLeadOnChangeReturn => {
    const history = useHistory()
    const state = useContext(LeadContext)
    const { sourcesAsOptions } = useLeadSourcesLoad()
    const { attributesAsOptions } = useLeadAttributesLoad()
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeSourceId = useCallback(
        (_, data: DropdownProps) => {
            state.setLead({ ...state.lead, sourceId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSurname = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, surname: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePatronymic = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, patronymic: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePost = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, post: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePostcode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, postcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCountry = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, country: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegion = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, region: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProvince = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, province: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCity = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, city: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStreet = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, street: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeHouse = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, house: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeApartment = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, apartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeOpportunitySum = useCallback(
        (_, data: InputOnChangeData) => {
            state.setLead({ ...state.lead, opportunitySum: parseInt(data.value, 10) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.lead.attributeLinks) {
                return
            }

            state.lead.attributeLinks[index].leadAttributeId = value

            state.setLead({
                ...state.lead
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.lead.attributeLinks) {
                return
            }

            const newLinks = [...state.lead.attributeLinks]

            newLinks[index].value = value

            state.setLead({
                ...state.lead,
                attributeLinks: newLinks
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setLead({
                ...state.lead,
                attributeLinks: state.lead.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setLead({ ...state.lead, attributeLinks: [...(state.lead.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setLead({ ...state.lead, isDeleted: !state.lead.isDeleted })
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
                value: state.lead.sourceId,
                options: sourcesAsOptions,
                onChange: onChangeSourceId
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Фамилия',
                value: state.lead.surname,
                onChange: onChangeSurname
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Имя',
                value: state.lead.name,
                onChange: onChangeName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Отчество',
                value: state.lead.patronymic,
                onChange: onChangePatronymic
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Телефон',
                value: state.lead.phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Email',
                value: state.lead.email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Должность',
                value: state.lead.post,
                onChange: onChangePost
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс',
                value: state.lead.postcode,
                onChange: onChangePostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна',
                value: state.lead.country,
                onChange: onChangeCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион',
                value: state.lead.region,
                onChange: onChangeRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция',
                value: state.lead.province,
                onChange: onChangeProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт',
                value: state.lead.city,
                onChange: onChangeCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица',
                value: state.lead.street,
                onChange: onChangeStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение',
                value: state.lead.house,
                onChange: onChangeHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира',
                value: state.lead.apartment,
                onChange: onChangeApartment
            },
            {
                type: 'number',
                required: true,
                topLabel: 'Сумма потенциальной сделки',
                value: state.lead.opportunitySum,
                onChange: onChangeOpportunitySum
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.lead.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.leadAttributeId ?? '',
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
                checked: state.lead.isDeleted,
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
            state.lead.apartment,
            state.lead.attributeLinks,
            state.lead.city,
            state.lead.country,
            state.lead.email,
            state.lead.house,
            state.lead.isDeleted,
            state.lead.name,
            state.lead.opportunitySum,
            state.lead.patronymic,
            state.lead.phone,
            state.lead.post,
            state.lead.postcode,
            state.lead.province,
            state.lead.region,
            state.lead.sourceId,
            state.lead.street,
            state.lead.surname
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useLeadOnChange
