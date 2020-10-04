import { useCallback, useContext, useMemo, useState } from 'react'

import ContactContext from '../../../contexts/ContactContext/ContactContext'
import ContactsRoutes from '../../../routes/ContactsRoutes'
import { EditFormFieldProps } from '../../../../../../../components/common/forms/EditForm/EditForm'
import useContactsSelectOptions from '../../../hooks/useContactsSelectOptions'
import { useHistory } from 'react-router'

interface UseContactEditReturn {
    fields: EditFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useContactEdit = (): UseContactEditReturn => {
    const history = useHistory()
    const {
        getActualLeads,
        getAllLeads,
        getActualCompanies,
        getAllCompanies,
        getActualAttributes,
        getAllAttributes
    } = useContactsSelectOptions()
    const state = useContext(ContactContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeLeadId = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, leadId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCompanyId = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, companyId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSurname = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, surname: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePatronymic = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, patronymic: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeTaxNumber = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, taxNumber: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePost = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, post: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePostcode = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, postcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCountry = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, country: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegion = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, region: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProvince = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, province: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCity = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, city: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStreet = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, street: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeHouse = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, house: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeApartment = useCallback(
        (_, data) => {
            state.setContact({ ...state.contact, apartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeBirthDate = useCallback(
        (_, data) => {
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

            const neww = [...state.contact.attributeLinks]

            neww[index].value = value

            state.setContact({
                ...state.contact,
                attributeLinks: neww
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

    const onClickConfirm = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: EditFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
                required: true,
                label: 'Лид',
                text: getAllLeads().find(x => x.value === state.contact.leadId)?.text,
                value: state.contact.leadId,
                options: getActualLeads(),
                onChange: onChangeLeadId
            },
            {
                type: 'dropdown',
                required: true,
                label: 'Компания',
                text: getAllCompanies().find(x => x.value === state.contact.companyId)?.text,
                value: state.contact.companyId,
                options: getActualCompanies(),
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
                options: getActualAttributes(),
                items: state.contact.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.contactAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
                    text: getAllAttributes().find(a => a.value === x.contactAttributeId)?.text,
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
            getActualAttributes,
            getActualCompanies,
            getActualLeads,
            getAllAttributes,
            getAllCompanies,
            getAllLeads,
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

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useContactEdit
