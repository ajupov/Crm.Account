import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import CompaniesFiltersState, { companiesFiltersInitialState } from '../../../states/CompaniesFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import CompaniesContext from '../../CompaniesContext/CompaniesContext'
import CompanyIndustryType from '../../../../../../../../api/companies/models/CompanyIndustryType'
import CompanyType from '../../../../../../../../api/companies/models/CompanyType'
import { FilterFormFieldProps } from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import { getCompanyIndustryTypesAsSelectOptions } from '../../../helpers/helpers/companyIndustryTypeHelper'
import { getCompanyTypesAsSelectOptions } from '../../../helpers/helpers/companyTypeHelper'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'
import useCompanyAttributesLoad from '../../../hooks/load/useCompanyAttributesLoad'
import useLeadsAutocomplete from '../../../hooks/autocomplete/useLeadsAutocomplete'

// TODO: Move to l10n
const useCompaniesFilters = (): CompaniesFiltersState => {
    const state = useContext(CompaniesContext)
    const { loadLeads, leadsAsOptions } = useLeadsAutocomplete()
    const { attributesAsOptions } = useCompanyAttributesLoad()
    const [leadId, setLeadId] = useState(state.request.leadId)
    const [types, setTypes] = useState(state.request.types ?? [])
    const [industryTypes, setIndustryTypes] = useState(state.request.industryTypes ?? [])
    const [fullName, setFullName] = useState(state.request.fullName ?? '')
    const [shortName, setShortName] = useState(state.request.shortName ?? '')
    const [phone, setPhone] = useState(state.request.phone ?? '')
    const [email, setEmail] = useState(state.request.email ?? '')
    const [taxNumber, setTaxNumber] = useState(state.request.taxNumber ?? '')
    const [registrationNumber, setRegistrationNumber] = useState(state.request.registrationNumber ?? '')
    const [minRegistrationDate, setMinRegistrationDate] = useState(state.request.minRegistrationDate ?? '')
    const [maxRegistrationDate, setMaxRegistrationDate] = useState(state.request.maxRegistrationDate ?? '')
    const [minEmployeesCount, setMinEmployeesCount] = useState(state.request.minEmployeesCount)
    const [maxEmployeesCount, setMaxEmployeesCount] = useState(state.request.maxEmployeesCount)
    const [minYearlyTurnover, setMinYearlyTurnover] = useState(state.request.minYearlyTurnover)
    const [maxYearlyTurnover, setMaxYearlyTurnover] = useState(state.request.maxYearlyTurnover)
    const [juridicalPostcode, setJuridicalPostcode] = useState(state.request.juridicalPostcode ?? '')
    const [juridicalCountry, setJuridicalCountry] = useState(state.request.juridicalCountry ?? '')
    const [juridicalRegion, setJuridicalRegion] = useState(state.request.juridicalRegion ?? '')
    const [juridicalProvince, setJuridicalProvince] = useState(state.request.juridicalProvince ?? '')
    const [juridicalCity, setJuridicalCity] = useState(state.request.juridicalCity ?? '')
    const [juridicalStreet, setJuridicalStreet] = useState(state.request.juridicalStreet ?? '')
    const [juridicalHouse, setJuridicalHouse] = useState(state.request.juridicalHouse ?? '')
    const [juridicalApartment, setJuridicalApartment] = useState(state.request.juridicalApartment ?? '')
    const [legalPostcode, setLegalPostcode] = useState(state.request.legalPostcode ?? '')
    const [legalCountry, setLegalCountry] = useState(state.request.legalCountry ?? '')
    const [legalRegion, setLegalRegion] = useState(state.request.legalRegion ?? '')
    const [legalProvince, setLegalProvince] = useState(state.request.legalProvince ?? '')
    const [legalCity, setLegalCity] = useState(state.request.legalCity ?? '')
    const [legalStreet, setLegalStreet] = useState(state.request.legalStreet ?? '')
    const [legalHouse, setLegalHouse] = useState(state.request.legalHouse ?? '')
    const [legalApartment, setLegalApartment] = useState(state.request.legalApartment ?? '')
    const [bankAccountNumber, setBankAccountNumber] = useState(state.request.bankAccountNumber ?? '')
    const [bankAccountBankName, setBankAccountBankName] = useState(state.request.bankAccountBankName ?? '')
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(companiesFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(companiesFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(companiesFiltersInitialState.isShowMobile)

    const onChangeLeadId = useCallback((_: any, data: DropdownProps) => {
        setLeadId(data.value as string)
        setIsApplyEnabled(true)
    }, [])

    const onChangeTypes = useCallback((_: any, data: DropdownProps) => {
        setTypes(data.value as CompanyType[])
    }, [])

    const onChangeIndustryTypes = useCallback((_: any, data: DropdownProps) => {
        setIndustryTypes(data.value as CompanyIndustryType[])
    }, [])

    const onChangeFullName = useCallback((_, data: InputOnChangeData) => {
        setFullName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeShortName = useCallback((_, data: InputOnChangeData) => {
        setShortName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePhone = useCallback((_, data: InputOnChangeData) => {
        setPhone(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeEmail = useCallback((_, data: InputOnChangeData) => {
        setEmail(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeTaxNumber = useCallback((_, data: InputOnChangeData) => {
        setTaxNumber(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeregistrationNumber = useCallback((_, data: InputOnChangeData) => {
        setRegistrationNumber(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinRegistrationDate = useCallback((_, data: InputOnChangeData) => {
        setMinRegistrationDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxRegistrationDate = useCallback((_, data: InputOnChangeData) => {
        setMaxRegistrationDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinEmployeesCount = useCallback((_, data: InputOnChangeData) => {
        setMinEmployeesCount(parseInt(data.value, 10))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxEmployeesCount = useCallback((_, data: InputOnChangeData) => {
        setMaxEmployeesCount(parseInt(data.value, 10))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinYearlyTurnover = useCallback((_, data: InputOnChangeData) => {
        setMinYearlyTurnover(parseInt(data.value, 10))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxYearlyTurnover = useCallback((_, data: InputOnChangeData) => {
        setMaxYearlyTurnover(parseInt(data.value, 10))
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalPostcode = useCallback((_, data: InputOnChangeData) => {
        setJuridicalPostcode(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalCountry = useCallback((_, data: InputOnChangeData) => {
        setJuridicalCountry(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalRegion = useCallback((_, data: InputOnChangeData) => {
        setJuridicalRegion(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalProvince = useCallback((_, data: InputOnChangeData) => {
        setJuridicalProvince(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalCity = useCallback((_, data: InputOnChangeData) => {
        setJuridicalCity(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalStreet = useCallback((_, data: InputOnChangeData) => {
        setJuridicalStreet(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalHouse = useCallback((_, data: InputOnChangeData) => {
        setJuridicalHouse(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeJuridicalApartment = useCallback((_, data: InputOnChangeData) => {
        setJuridicalApartment(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalPostcode = useCallback((_, data: InputOnChangeData) => {
        setLegalPostcode(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalCountry = useCallback((_, data: InputOnChangeData) => {
        setLegalCountry(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalRegion = useCallback((_, data: InputOnChangeData) => {
        setLegalRegion(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalProvince = useCallback((_, data: InputOnChangeData) => {
        setLegalProvince(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalCity = useCallback((_, data: InputOnChangeData) => {
        setLegalCity(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalStreet = useCallback((_, data: InputOnChangeData) => {
        setLegalStreet(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalHouse = useCallback((_, data: InputOnChangeData) => {
        setLegalHouse(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeLegalApartment = useCallback((_, data: InputOnChangeData) => {
        setLegalApartment(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeBankAccountNumber = useCallback((_, data: InputOnChangeData) => {
        setBankAccountNumber(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeBankAccountBankName = useCallback((_, data: InputOnChangeData) => {
        setBankAccountBankName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeAttributeIds = useCallback((_: any, data: DropdownProps) => {
        setAttributeIds(arrayToDictionary(data.value as string[]))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinCreateDate = useCallback((_, data: InputOnChangeData) => {
        setMinCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxCreateDate = useCallback((_, data: InputOnChangeData) => {
        setMaxCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinModifyDate = useCallback((_, data: InputOnChangeData) => {
        setMinModifyDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxModifyDate = useCallback((_, data: InputOnChangeData) => {
        setMaxModifyDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeIsDeleted = useCallback((_, data: CheckboxProps) => {
        setIsDeleted(toBooleanNullable(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            leadId,
            types,
            industryTypes,
            fullName,
            shortName,
            phone,
            email,
            taxNumber,
            registrationNumber,
            minRegistrationDate,
            maxRegistrationDate,
            minEmployeesCount,
            maxEmployeesCount,
            minYearlyTurnover,
            maxYearlyTurnover,
            juridicalPostcode,
            juridicalCountry,
            juridicalRegion,
            juridicalProvince,
            juridicalCity,
            juridicalStreet,
            juridicalHouse,
            juridicalApartment,
            legalPostcode,
            legalCountry,
            legalRegion,
            legalProvince,
            legalCity,
            legalStreet,
            legalHouse,
            legalApartment,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            bankAccountNumber,
            allAttributes: true,
            attributes: attributeIds,
            bankAccountBankName,
            isDeleted,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [
        attributeIds,
        bankAccountBankName,
        bankAccountNumber,
        email,
        fullName,
        industryTypes,
        isDeleted,
        juridicalApartment,
        juridicalCity,
        juridicalCountry,
        juridicalHouse,
        juridicalPostcode,
        juridicalProvince,
        juridicalRegion,
        juridicalStreet,
        leadId,
        legalApartment,
        legalCity,
        legalCountry,
        legalHouse,
        legalPostcode,
        legalProvince,
        legalRegion,
        legalStreet,
        maxCreateDate,
        maxEmployeesCount,
        maxModifyDate,
        maxRegistrationDate,
        maxYearlyTurnover,
        minCreateDate,
        minEmployeesCount,
        minModifyDate,
        minRegistrationDate,
        minYearlyTurnover,
        phone,
        registrationNumber,
        shortName,
        state,
        taxNumber,
        types
    ])

    const onReset = useCallback(() => {
        setLeadId(void 0)
        setTypes([])
        setIndustryTypes([])
        setFullName('')
        setShortName('')
        setPhone('')
        setEmail('')
        setTaxNumber('')
        setRegistrationNumber('')
        setMinRegistrationDate('')
        setMaxRegistrationDate('')
        setMinEmployeesCount(void 0)
        setMaxEmployeesCount(void 0)
        setMinYearlyTurnover(void 0)
        setMaxYearlyTurnover(void 0)
        setJuridicalPostcode('')
        setJuridicalCountry('')
        setJuridicalRegion('')
        setJuridicalProvince('')
        setJuridicalCity('')
        setJuridicalStreet('')
        setJuridicalHouse('')
        setJuridicalApartment('')
        setLegalPostcode('')
        setLegalCountry('')
        setLegalRegion('')
        setLegalProvince('')
        setLegalCity('')
        setLegalStreet('')
        setLegalHouse('')
        setLegalApartment('')
        setBankAccountNumber('')
        setBankAccountBankName('')
        setAttributeIds({})
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            leadId: void 0,
            fullName: void 0,
            shortName: void 0,
            phone: void 0,
            email: void 0,
            taxNumber: void 0,
            registrationNumber: void 0,
            minRegistrationDate: void 0,
            maxRegistrationDate: void 0,
            minEmployeesCount: void 0,
            maxEmployeesCount: void 0,
            minYearlyTurnover: void 0,
            maxYearlyTurnover: void 0,
            juridicalPostcode: void 0,
            juridicalCountry: void 0,
            juridicalRegion: void 0,
            juridicalProvince: void 0,
            juridicalCity: void 0,
            juridicalStreet: void 0,
            juridicalHouse: void 0,
            juridicalApartment: void 0,
            legalPostcode: void 0,
            legalCountry: void 0,
            legalRegion: void 0,
            legalProvince: void 0,
            legalCity: void 0,
            legalStreet: void 0,
            legalHouse: void 0,
            legalApartment: void 0,
            isDeleted: void 0,
            minCreateDate: void 0,
            maxCreateDate: void 0,
            minModifyDate: void 0,
            maxModifyDate: void 0,
            types: [],
            industryTypes: [],
            allAttributes: void 0,
            attributes: {},
            bankAccountNumber: void 0,
            bankAccountBankNumber: void 0,
            bankAccountBankCorrespondentNumber: void 0,
            bankAccountBankName: void 0,
            createUserIds: [],
            responsibleUserIds: [],
            offset: 0
        })

        setIsShowMobile(false)
        setIsResetEnabled(false)
    }, [state])

    const onShowMobile = useCallback(() => setIsShowMobile(true), [setIsShowMobile])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [setIsShowMobile])

    const fields: FilterFormFieldProps[] = useMemo(
        () => [
            {
                type: 'autocomplete',
                label: 'Лид',
                value: leadId,
                load: loadLeads,
                options: leadsAsOptions,
                onChange: onChangeLeadId
            },
            {
                type: 'dropdown',
                multiple: true,
                label: 'Тип',
                value: types,
                options: getCompanyTypesAsSelectOptions(),
                onChange: onChangeTypes
            },
            {
                type: 'dropdown',
                multiple: true,
                label: 'Род деятельности',
                value: industryTypes,
                options: getCompanyIndustryTypesAsSelectOptions(),
                onChange: onChangeIndustryTypes
            },
            {
                type: 'text',
                topLabel: 'Полное название',
                value: fullName,
                onChange: onChangeFullName
            },
            {
                type: 'text',
                topLabel: 'Краткое название',
                value: shortName,
                onChange: onChangeShortName
            },
            {
                type: 'text',
                topLabel: 'Телефон',
                value: phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                topLabel: 'Email',
                value: email,
                onChange: onChangeEmail
            },
            {
                type: 'text',
                topLabel: 'ИНН',
                value: taxNumber,
                onChange: onChangeTaxNumber
            },
            {
                type: 'text',
                topLabel: 'ОГРН',
                value: registrationNumber,
                onChange: onChangeregistrationNumber
            },
            {
                type: 'date',
                topLabel: 'Дата регистрации',
                value1: minRegistrationDate,
                onChange1: onChangeMinRegistrationDate,
                value2: maxRegistrationDate,
                onChange2: onChangeMaxRegistrationDate
            },
            {
                type: 'number',
                topLabel: 'Количество сотрудников',
                value1: minEmployeesCount,
                onChange1: onChangeMinEmployeesCount,
                value2: maxEmployeesCount,
                onChange2: onChangeMaxEmployeesCount
            },
            {
                type: 'number',
                topLabel: 'Годовой оборот',
                value1: minYearlyTurnover,
                onChange1: onChangeMinYearlyTurnover,
                value2: maxYearlyTurnover,
                onChange2: onChangeMaxYearlyTurnover
            },
            {
                type: 'text',
                topLabel: 'Почтовый индекс (юридический адрес)',
                value: juridicalPostcode,
                onChange: onChangeJuridicalPostcode
            },
            {
                type: 'text',
                topLabel: 'Страна (юридический адрес)',
                value: juridicalCountry,
                onChange: onChangeJuridicalCountry
            },
            {
                type: 'text',
                topLabel: 'Регион (юридический адрес)',
                value: juridicalRegion,
                onChange: onChangeJuridicalRegion
            },
            {
                type: 'text',
                topLabel: 'Район/провинция (юридический адрес)',
                value: juridicalProvince,
                onChange: onChangeJuridicalProvince
            },
            {
                type: 'text',
                topLabel: 'Город/населенный пункт (юридический адрес)',
                value: juridicalCity,
                onChange: onChangeJuridicalCity
            },
            {
                type: 'text',
                topLabel: 'Улица (юридический адрес)',
                value: juridicalStreet,
                onChange: onChangeJuridicalStreet
            },
            {
                type: 'text',
                topLabel: 'Дом/строение (юридический адрес)',
                value: juridicalHouse,
                onChange: onChangeJuridicalHouse
            },
            {
                type: 'text',
                topLabel: 'Квартира (юридический адрес)',
                value: juridicalApartment,
                onChange: onChangeJuridicalApartment
            },
            {
                type: 'text',
                topLabel: 'Почтовый индекс (фактический адрес)',
                value: legalPostcode,
                onChange: onChangeLegalPostcode
            },
            {
                type: 'text',
                topLabel: 'Страна (фактический адрес)',
                value: legalCountry,
                onChange: onChangeLegalCountry
            },
            {
                type: 'text',
                topLabel: 'Регион (фактический адрес)',
                value: legalRegion,
                onChange: onChangeLegalRegion
            },
            {
                type: 'text',
                topLabel: 'Район/провинция (фактический адрес)',
                value: legalProvince,
                onChange: onChangeLegalProvince
            },
            {
                type: 'text',
                topLabel: 'Город/населенный пункт (фактический адрес)',
                value: legalCity,
                onChange: onChangeLegalCity
            },
            {
                type: 'text',
                topLabel: 'Улица (фактический адрес)',
                value: legalStreet,
                onChange: onChangeLegalStreet
            },
            {
                type: 'text',
                topLabel: 'Дом/строение (фактический адрес)',
                value: legalHouse,
                onChange: onChangeLegalHouse
            },
            {
                type: 'text',
                topLabel: 'Квартира (фактический адрес)',
                value: legalApartment,
                onChange: onChangeLegalApartment
            },
            {
                type: 'text',
                topLabel: 'Номер расчетного счета',
                value: bankAccountNumber,
                onChange: onChangeBankAccountNumber
            },
            {
                type: 'text',
                topLabel: 'Название банка',
                value: bankAccountBankName,
                onChange: onChangeBankAccountBankName
            },
            {
                type: 'dropdown',
                multiple: true,
                label: 'Атрибуты',
                value: dictionaryToArray(attributeIds),
                options: attributesAsOptions,
                onChange: onChangeAttributeIds
            },
            {
                type: 'date',
                topLabel: 'Дата создания',
                value1: minCreateDate,
                onChange1: onChangeMinCreateDate,
                value2: maxCreateDate,
                onChange2: onChangeMaxCreateDate
            },
            {
                type: 'date',
                topLabel: 'Дата изменения',
                value1: minModifyDate,
                onChange1: onChangeMinModifyDate,
                value2: maxModifyDate,
                onChange2: onChangeMaxModifyDate
            },
            {
                type: 'radio',
                topLabel: 'Удаленность',
                label1: 'Все',
                value1: void 0,
                checked1: isDeleted === void 0,
                label2: 'Не удаленные',
                value2: 'false',
                checked2: isDeleted === false,
                label3: 'Удаленные',
                value3: 'true',
                checked3: isDeleted === true,
                onChange: onChangeIsDeleted
            }
        ],
        [
            attributeIds,
            attributesAsOptions,
            bankAccountBankName,
            bankAccountNumber,
            email,
            fullName,
            industryTypes,
            isDeleted,
            juridicalApartment,
            juridicalCity,
            juridicalCountry,
            juridicalHouse,
            juridicalPostcode,
            juridicalProvince,
            juridicalRegion,
            juridicalStreet,
            leadId,
            leadsAsOptions,
            legalApartment,
            legalCity,
            legalCountry,
            legalHouse,
            legalPostcode,
            legalProvince,
            legalRegion,
            legalStreet,
            loadLeads,
            maxCreateDate,
            maxEmployeesCount,
            maxModifyDate,
            maxRegistrationDate,
            maxYearlyTurnover,
            minCreateDate,
            minEmployeesCount,
            minModifyDate,
            minRegistrationDate,
            minYearlyTurnover,
            onChangeAttributeIds,
            onChangeBankAccountBankName,
            onChangeBankAccountNumber,
            onChangeEmail,
            onChangeFullName,
            onChangeIndustryTypes,
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
            onChangeMaxCreateDate,
            onChangeMaxEmployeesCount,
            onChangeMaxModifyDate,
            onChangeMaxRegistrationDate,
            onChangeMaxYearlyTurnover,
            onChangeMinCreateDate,
            onChangeMinEmployeesCount,
            onChangeMinModifyDate,
            onChangeMinRegistrationDate,
            onChangeMinYearlyTurnover,
            onChangePhone,
            onChangeShortName,
            onChangeTaxNumber,
            onChangeTypes,
            onChangeregistrationNumber,
            phone,
            registrationNumber,
            shortName,
            taxNumber,
            types
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useCompaniesFilters
