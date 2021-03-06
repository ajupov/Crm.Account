import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import { CreateFormFieldProps } from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useCompaniesAutocomplete from '../autocomplete/useCompaniesAutocomplete'
import useCompanyLoad from '../load/useCompanyLoad'
import useContactAttributesLoad from '../load/useContactAttributesLoad'
import { useHistory } from 'react-router'
import useLeadLoad from '../load/useLeadLoad'
import useLeadsAutocomplete from '../autocomplete/useLeadsAutocomplete'

interface UseContactOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useContactOnChange = (): UseContactOnChangeReturn => {
    const history = useHistory()
    const state = useContext(ContactContext)
    const { lead } = useLeadLoad(state.contact.leadId)
    const { company } = useCompanyLoad(state.contact.companyId)
    const { loadLeads, leadsAsOptions } = useLeadsAutocomplete()
    const { loadCompanies, companiesAsOptions } = useCompaniesAutocomplete()
    const { attributesAsOptions } = useContactAttributesLoad()

    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeLeadId = useCallback(
        (_, data: DropdownProps) => {
            state.setContact({ ...state.contact, leadId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCompanyId = useCallback(
        (_, data: DropdownProps) => {
            state.setContact({ ...state.contact, companyId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSurname = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, surname: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePatronymic = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, patronymic: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeTaxNumber = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, taxNumber: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePost = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, post: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePostcode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, postcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCountry = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, country: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegion = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, region: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProvince = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, province: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCity = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, city: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStreet = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, street: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeHouse = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, house: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeApartment = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, apartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeBirthDate = useCallback(
        (_, data: InputOnChangeData) => {
            state.setContact({ ...state.contact, birthDate: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.contact.attributeLinks) {
                return
            }

            state.contact.attributeLinks[index].contactAttributeId = value

            state.setContact({
                ...state.contact
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.contact.attributeLinks) {
                return
            }

            const newLinks = [...state.contact.attributeLinks]

            newLinks[index].value = value

            state.setContact({
                ...state.contact,
                attributeLinks: newLinks
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setContact({
                ...state.contact,
                attributeLinks: state.contact.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setContact({ ...state.contact, attributeLinks: [...(state.contact.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setContact({ ...state.contact, isDeleted: !state.contact.isDeleted })
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
                type: 'autocomplete',
                label: 'Лид',
                value: state.contact.leadId,
                text: lead ? `${lead?.surname} ${lead?.name} ${lead?.patronymic}`.trim() : '',
                load: loadLeads,
                options: leadsAsOptions,
                onChange: onChangeLeadId
            },
            {
                type: 'autocomplete',
                label: 'Компания',
                value: state.contact.companyId,
                text: company?.fullName ?? '',
                load: loadCompanies,
                options: companiesAsOptions,
                onChange: onChangeCompanyId
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Фамилия',
                value: state.contact.surname,
                onChange: onChangeSurname
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Имя',
                value: state.contact.name,
                onChange: onChangeName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Отчество',
                value: state.contact.patronymic,
                onChange: onChangePatronymic
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Телефон',
                value: state.contact.phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Email',
                value: state.contact.email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                required: true,
                topLabel: 'ИНН',
                value: state.contact.taxNumber,
                onChange: onChangeTaxNumber
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Должность',
                value: state.contact.post,
                onChange: onChangePost
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс',
                value: state.contact.postcode,
                onChange: onChangePostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна',
                value: state.contact.country,
                onChange: onChangeCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион',
                value: state.contact.region,
                onChange: onChangeRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция',
                value: state.contact.province,
                onChange: onChangeProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт',
                value: state.contact.city,
                onChange: onChangeCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица',
                value: state.contact.street,
                onChange: onChangeStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение',
                value: state.contact.house,
                onChange: onChangeHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира',
                value: state.contact.apartment,
                onChange: onChangeApartment
            },
            {
                type: 'date',
                required: true,
                topLabel: 'Дата рождения',
                value: state.contact.birthDate,
                onChange: onChangeBirthDate
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.contact.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.contactAttributeId ?? '',
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
                checked: state.contact.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            attributesAsOptions,
            companiesAsOptions,
            company?.fullName,
            lead,
            leadsAsOptions,
            loadCompanies,
            loadLeads,
            onChangeApartment,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onChangeBirthDate,
            onChangeCity,
            onChangeCompanyId,
            onChangeCountry,
            onChangeEmail,
            onChangeHouse,
            onChangeIsDeleted,
            onChangeLeadId,
            onChangeName,
            onChangePatronymic,
            onChangePhone,
            onChangePost,
            onChangePostcode,
            onChangeProvince,
            onChangeRegion,
            onChangeStreet,
            onChangeSurname,
            onChangeTaxNumber,
            onClickAddAttributeItem,
            onDeleteAttribute,
            state.contact.apartment,
            state.contact.attributeLinks,
            state.contact.birthDate,
            state.contact.city,
            state.contact.companyId,
            state.contact.country,
            state.contact.email,
            state.contact.house,
            state.contact.isDeleted,
            state.contact.leadId,
            state.contact.name,
            state.contact.patronymic,
            state.contact.phone,
            state.contact.post,
            state.contact.postcode,
            state.contact.province,
            state.contact.region,
            state.contact.street,
            state.contact.surname,
            state.contact.taxNumber
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useContactOnChange
