import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getCompanyIndustryTypeName,
    getCompanyIndustryTypesAsSelectOptions
} from '../helpers/helpers/companyIndustryTypeHelper'
import { getCompanyTypeName, getCompanyTypesAsSelectOptions } from '../helpers/helpers/companyTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import CompanyContext from '../contexts/CompanyContext/CompanyContext'
import CompanyType from '../../../../../../api/companies/models/CompanyType'
import { CreateFormFieldProps } from '../../../../../components/common/forms/CreateForm/CreateForm'
import useCompaniesSelectOptions from './useCompaniesSelectOptions'
import { useHistory } from 'react-router'

interface UseCompanyOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyOnChange = (): UseCompanyOnChangeReturn => {
    const history = useHistory()
    const { getActualLeads, getAllLeads, getActualAttributes, getAllAttributes } = useCompaniesSelectOptions()
    const state = useContext(CompanyContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeLeadId = useCallback(
        (_, data: DropdownProps) => {
            state.setCompany({ ...state.company, leadId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setCompany({ ...state.company, type: data.value as CompanyType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeFullName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, fullName: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeShortName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, shortName: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePhone = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, phone: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmail = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, email: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeRegistrationDate = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, registrationDate: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEmployeesCount = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, employeesCount: parseInt(data.value, 10) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeYearlyTurnover = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, yearlyTurnover: parseInt(data.value, 10) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalPostcode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalPostcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalCountry = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalCountry: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalRegion = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalRegion: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalProvince = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalProvince: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalCity = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalCity: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalStreet = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalStreet: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalHouse = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalHouse: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeJuridicalApartment = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, juridicalApartment: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalPostcode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalPostcode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalCountry = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalCountry: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalRegion = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalRegion: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalProvince = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalProvince: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalCity = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalCity: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalStreet = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalStreet: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalHouse = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalHouse: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeLegalApartment = useCallback(
        (_, data: InputOnChangeData) => {
            state.setCompany({ ...state.company, legalApartment: data.value })
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
                label: 'Лид',
                text: getAllLeads().find(x => x.value === state.company.leadId)?.text,
                value: state.company.leadId,
                options: getActualLeads(),
                onChange: onChangeLeadId
            },
            {
                type: 'dropdown',
                required: true,
                label: 'Тип',
                value: state.company.type,
                text: getCompanyTypeName(state.company.type),
                options: getCompanyTypesAsSelectOptions(),
                onChange: onChangeType
            },
            {
                type: 'dropdown',
                required: true,
                label: 'Род деятельности',
                value: state.company.industryType,
                text: getCompanyIndustryTypeName(state.company.industryType),
                options: getCompanyIndustryTypesAsSelectOptions(),
                onChange: onChangeType
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Полное название',
                value: state.company.fullName,
                onChange: onChangeFullName
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Краткое название',
                value: state.company.shortName,
                onChange: onChangeShortName
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
                value: state.company.email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                required: true,
                topLabel: 'ОГРН',
                value: state.company.email,
                onChange: onChangeEmail
            },
            {
                type: 'date',
                required: true,
                topLabel: 'Дата регистрации',
                value: state.company.registrationDate,
                onChange: onChangeRegistrationDate
            },
            {
                type: 'number',
                required: true,
                topLabel: 'Количество сотрудников',
                value: state.company.employeesCount,
                onChange: onChangeEmployeesCount
            },
            {
                type: 'number',
                required: true,
                topLabel: 'Годовой оборот',
                value: state.company.yearlyTurnover,
                onChange: onChangeYearlyTurnover
            },

            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс (юридический адрес)',
                value: state.company.juridicalPostcode,
                onChange: onChangeJuridicalPostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна (юридический адрес)',
                value: state.company.juridicalCountry,
                onChange: onChangeJuridicalCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион (юридический адрес)',
                value: state.company.juridicalRegion,
                onChange: onChangeJuridicalRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция (юридический адрес)',
                value: state.company.juridicalProvince,
                onChange: onChangeJuridicalProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт (юридический адрес)',
                value: state.company.juridicalCity,
                onChange: onChangeJuridicalCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица (юридический адрес)',
                value: state.company.juridicalStreet,
                onChange: onChangeJuridicalStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение (юридический адрес)',
                value: state.company.juridicalHouse,
                onChange: onChangeJuridicalHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира (юридический адрес)',
                value: state.company.juridicalApartment,
                onChange: onChangeJuridicalApartment
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Почтовый индекс (фактический адрес)',
                value: state.company.legalPostcode,
                onChange: onChangeLegalPostcode
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Страна (фактический адрес)',
                value: state.company.legalCountry,
                onChange: onChangeLegalCountry
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Регион (фактический адрес)',
                value: state.company.legalRegion,
                onChange: onChangeLegalRegion
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Район/провинция (фактический адрес)',
                value: state.company.legalProvince,
                onChange: onChangeLegalProvince
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Город/населенный пункт (фактический адрес)',
                value: state.company.legalCity,
                onChange: onChangeLegalCity
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Улица (фактический адрес)',
                value: state.company.legalStreet,
                onChange: onChangeLegalStreet
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Дом/строение (фактический адрес)',
                value: state.company.legalHouse,
                onChange: onChangeLegalHouse
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Квартира (фактический адрес)',
                value: state.company.legalApartment,
                onChange: onChangeLegalApartment
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
            getActualLeads,
            getAllAttributes,
            getAllLeads,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onChangeEmail,
            onChangeEmployeesCount,
            onChangeFullName,
            onChangeIsDeleted,
            onChangeJuridicalApartment,
            onChangeJuridicalCity,
            onChangeJuridicalCountry,
            onChangeJuridicalHouse,
            onChangeJuridicalPostcode,
            onChangeJuridicalProvince,
            onChangeJuridicalRegion,
            onChangeJuridicalStreet,
            onChangeLeadId,
            onChangeLegalApartment,
            onChangeLegalCity,
            onChangeLegalCountry,
            onChangeLegalHouse,
            onChangeLegalPostcode,
            onChangeLegalProvince,
            onChangeLegalRegion,
            onChangeLegalStreet,
            onChangePhone,
            onChangeRegistrationDate,
            onChangeShortName,
            onChangeType,
            onChangeYearlyTurnover,
            onClickAddAttributeItem,
            onDeleteAttribute,
            state.company.attributeLinks,
            state.company.email,
            state.company.employeesCount,
            state.company.fullName,
            state.company.industryType,
            state.company.isDeleted,
            state.company.juridicalApartment,
            state.company.juridicalCity,
            state.company.juridicalCountry,
            state.company.juridicalHouse,
            state.company.juridicalPostcode,
            state.company.juridicalProvince,
            state.company.juridicalRegion,
            state.company.juridicalStreet,
            state.company.leadId,
            state.company.legalApartment,
            state.company.legalCity,
            state.company.legalCountry,
            state.company.legalHouse,
            state.company.legalPostcode,
            state.company.legalProvince,
            state.company.legalRegion,
            state.company.legalStreet,
            state.company.phone,
            state.company.registrationDate,
            state.company.shortName,
            state.company.type,
            state.company.yearlyTurnover
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useCompanyOnChange
