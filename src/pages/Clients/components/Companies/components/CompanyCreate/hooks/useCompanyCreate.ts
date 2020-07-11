import { useCallback, useContext, useMemo, useState } from 'react'

import CompanyContext from '../../../contexts/CompanyContext/CompanyContext'
import { CreateFormFieldProps } from '../../../../../../../components/common/forms/CreateForm/CreateForm'
import useCompaniesSelectOptions from '../../../hooks/useCompaniesSelectOptions'
import { useHistory } from 'react-router'

interface UseCompanyCreateReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyCreate = (): UseCompanyCreateReturn => {
    const history = useHistory()
    const {
        getActualLeads,
        getAllLeads,
        getActualCompanies,
        getAllCompanies,
        getActualAttributes,
        getAllAttributes
    } = useCompaniesSelectOptions()
    const state = useContext(CompanyContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeLeadId = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, leadId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCompanyId = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, companyId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSurname = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, surname: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePatronymic = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, patronymic: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeTaxNumber = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, taxNumber: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePost = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, post: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePostcode = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, postcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCountry = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, country: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegion = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, region: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProvince = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, province: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCity = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, city: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStreet = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, street: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeHouse = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, house: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeApartment = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, apartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeBirthDate = useCallback(
        (_, data) => {
            state.setCompany({ ...state.company, birthDate: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.company.attributeLinks) {
                return
            }

            state.company.attributeLinks[index].companyAttributeId = value

            state.setCompany({
                ...state.company
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.company.attributeLinks) {
                return
            }

            const neww = [...state.company.attributeLinks]

            neww[index].value = value

            state.setCompany({
                ...state.company,
                attributeLinks: neww
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setCompany({
                ...state.company,
                attributeLinks: state.company.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setCompany({ ...state.company, attributeLinks: [...(state.company.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setCompany({ ...state.company, isDeleted: !state.company.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: CreateFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
                required: true,
                label: 'Лид',
                text: getAllLeads().find(x => x.value === state.company.leadId)?.text,
                value: state.company.leadId,
                options: getActualLeads(),
                onChange: onChangeLeadId
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Фамилия',
                value: state.company.surname,
                onChange: onChangeSurname
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Имя',
                value: state.company.name,
                onChange: onChangeName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Отчество',
                value: state.company.patronymic,
                onChange: onChangePatronymic
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Отчество',
                value: state.company.patronymic,
                onChange: onChangePatronymic
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Телефон',
                value: state.company.phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Email',
                value: state.company.email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                required: true,
                topLabel: 'ИНН',
                value: state.company.taxNumber,
                onChange: onChangeTaxNumber
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Должность',
                value: state.company.post,
                onChange: onChangePost
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс',
                value: state.company.postcode,
                onChange: onChangePostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна',
                value: state.company.country,
                onChange: onChangeCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион',
                value: state.company.region,
                onChange: onChangeRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция',
                value: state.company.province,
                onChange: onChangeProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт',
                value: state.company.city,
                onChange: onChangeCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица',
                value: state.company.street,
                onChange: onChangeStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение',
                value: state.company.house,
                onChange: onChangeHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира',
                value: state.company.apartment,
                onChange: onChangeApartment
            },
            {
                type: 'date',
                required: true,
                topLabel: 'Дата рождения',
                value: state.company.birthDate,
                onChange: onChangeBirthDate
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: getActualAttributes(),
                items: state.company.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.companyAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
                    text: getAllAttributes().find(a => a.value === x.companyAttributeId)?.text,
                    onChangeValue: onChangeAttributeValue,
                    onClickDelete: onDeleteAttribute
                })),
                onClickAddItem: onClickAddAttributeItem
            },

            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.company.isDeleted,
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
            state.company.apartment,
            state.company.attributeLinks,
            state.company.birthDate,
            state.company.city,
            state.company.companyId,
            state.company.country,
            state.company.email,
            state.company.house,
            state.company.isDeleted,
            state.company.leadId,
            state.company.name,
            state.company.patronymic,
            state.company.phone,
            state.company.post,
            state.company.postcode,
            state.company.province,
            state.company.region,
            state.company.street,
            state.company.surname,
            state.company.taxNumber
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useCompanyCreate
