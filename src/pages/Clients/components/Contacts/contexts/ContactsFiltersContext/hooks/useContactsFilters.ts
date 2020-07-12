import ContactsFiltersState, { contactsFiltersInitialState } from '../../../states/ContactsFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import ContactsContext from '../../ContactsContext/ContactsContext'
import { FilterFormFieldProps } from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'
import useContactsSelectOptions from '../../../hooks/useContactsSelectOptions'

// TODO: Move to l10n
const useContactsFilters = (): ContactsFiltersState => {
    const state = useContext(ContactsContext)
    const { getActualAttributes } = useContactsSelectOptions()

    const [surname, setSurname] = useState(state.request.surname ?? '')
    const [name, setName] = useState(state.request.name ?? '')
    const [patronymic, setPatronymic] = useState(state.request.patronymic ?? '')
    const [phone, setPhone] = useState(state.request.phone ?? '')
    const [email, setEmail] = useState(state.request.email ?? '')
    const [taxNumber, setTaxNumber] = useState(state.request.taxNumber ?? '')
    const [post, setPost] = useState(state.request.post ?? '')
    const [postcode, setPostcode] = useState(state.request.postcode ?? '')
    const [country, setCountry] = useState(state.request.country ?? '')
    const [region, setRegion] = useState(state.request.region ?? '')
    const [province, setProvince] = useState(state.request.province ?? '')
    const [city, setCity] = useState(state.request.city ?? '')
    const [street, setStreet] = useState(state.request.street ?? '')
    const [house, setHouse] = useState(state.request.house ?? '')
    const [apartment, setApartment] = useState(state.request.apartment ?? '')
    const [minBirthDate, setMinBirthDate] = useState(state.request.minBirthDate ?? '')
    const [maxBirthDate, setMaxBirthDate] = useState(state.request.maxBirthDate ?? '')
    const [bankAccountNumber, setBankAccountNumber] = useState(state.request.bankAccountNumber ?? '')
    const [bankAccountBankName, setBankAccountBankName] = useState(state.request.bankAccountBankName ?? '')
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(contactsFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(contactsFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(contactsFiltersInitialState.isShowMobile)

    const onChangeName = useCallback((_, { value }) => {
        setName(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeSurname = useCallback((_, { value }) => {
        setSurname(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePatronymic = useCallback((_, { value }) => {
        setPatronymic(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePhone = useCallback((_, { value }) => {
        setPhone(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeEmail = useCallback((_, { value }) => {
        setEmail(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeTaxNumber = useCallback((_, { value }) => {
        setTaxNumber(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePost = useCallback((_, { value }) => {
        setPost(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePostcode = useCallback((_, { value }) => {
        setPostcode(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeCountry = useCallback((_, { value }) => {
        setCountry(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeRegion = useCallback((_, { value }) => {
        setRegion(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeProvince = useCallback((_, { value }) => {
        setProvince(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeCity = useCallback((_, { value }) => {
        setCity(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeStreet = useCallback((_, { value }) => {
        setStreet(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeHouse = useCallback((_, { value }) => {
        setHouse(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeApartment = useCallback((_, { value }) => {
        setApartment(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinBirthDate = useCallback((_, { value }) => {
        setMinBirthDate(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxBirthDate = useCallback((_, { value }) => {
        setMaxBirthDate(value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeBankAccountNumber = useCallback((_, data) => {
        setBankAccountNumber(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeBankAccountBankName = useCallback((_, data) => {
        setBankAccountBankName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeAttributeIds = useCallback((_: any, { value }) => {
        setAttributeIds(arrayToDictionary(value as string[]))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinCreateDate = useCallback((_, data) => {
        setMinCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxCreateDate = useCallback((_, data) => {
        setMaxCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinModifyDate = useCallback((_, data) => {
        setMinModifyDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxModifyDate = useCallback((_, data) => {
        setMaxModifyDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeIsDeleted = useCallback((_, data) => {
        setIsDeleted(toBooleanNullable(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            surname,
            name,
            patronymic,
            phone,
            email,
            taxNumber,
            post,
            postcode,
            country,
            region,
            province,
            city,
            street,
            house,
            apartment,
            minBirthDate,
            maxBirthDate,
            bankAccountNumber,
            bankAccountBankName,
            allAttributes: true,
            attributes: attributeIds,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            isDeleted,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [
        apartment,
        attributeIds,
        bankAccountBankName,
        bankAccountNumber,
        city,
        country,
        email,
        house,
        isDeleted,
        maxBirthDate,
        maxCreateDate,
        maxModifyDate,
        minBirthDate,
        minCreateDate,
        minModifyDate,
        name,
        patronymic,
        phone,
        post,
        postcode,
        province,
        region,
        state,
        street,
        surname,
        taxNumber
    ])

    const onReset = useCallback(() => {
        setSurname('')
        setName('')
        setPatronymic('')
        setPhone('')
        setEmail('')
        setTaxNumber('')
        setPost('')
        setPostcode('')
        setCountry('')
        setRegion('')
        setProvince('')
        setCity('')
        setStreet('')
        setHouse('')
        setApartment('')
        setMinBirthDate('')
        setMaxBirthDate('')
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
            surname: void 0,
            name: void 0,
            patronymic: void 0,
            phone: void 0,
            email: void 0,
            taxNumber: void 0,
            post: void 0,
            postcode: void 0,
            country: void 0,
            region: void 0,
            province: void 0,
            city: void 0,
            street: void 0,
            house: void 0,
            apartment: void 0,
            minBirthDate: void 0,
            maxBirthDate: void 0,
            bankAccountNumber: void 0,
            bankAccountBankName: void 0,
            allAttributes: true,
            attributes: {},
            minCreateDate: void 0,
            maxCreateDate: void 0,
            minModifyDate: void 0,
            maxModifyDate: void 0,
            isDeleted: false,
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
                type: 'text',
                topLabel: 'Фамилия',
                value: surname,
                onChange: onChangeSurname
            },
            {
                type: 'text',
                topLabel: 'Имя',
                value: name,
                onChange: onChangeName
            },
            {
                type: 'text',
                topLabel: 'Отчество',
                value: patronymic,
                onChange: onChangePatronymic
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
                topLabel: 'Должность',
                value: post,
                onChange: onChangePost
            },
            {
                type: 'text',
                topLabel: 'Почтовый индекс',
                value: postcode,
                onChange: onChangePostcode
            },
            {
                type: 'text',
                topLabel: 'Страна',
                value: country,
                onChange: onChangeCountry
            },
            {
                type: 'text',
                topLabel: 'Регион',
                value: region,
                onChange: onChangeRegion
            },
            {
                type: 'text',
                topLabel: 'Район/провинция',
                value: province,
                onChange: onChangeProvince
            },
            {
                type: 'text',
                topLabel: 'Город/населенный пункт',
                value: city,
                onChange: onChangeCity
            },
            {
                type: 'text',
                topLabel: 'Улица',
                value: street,
                onChange: onChangeStreet
            },
            {
                type: 'text',
                topLabel: 'Дом/строение',
                value: house,
                onChange: onChangeHouse
            },
            {
                type: 'text',
                topLabel: 'Квартира',
                value: apartment,
                onChange: onChangeApartment
            },
            {
                type: 'date',
                topLabel: 'Дата рождения',
                value1: minBirthDate,
                onChange1: onChangeMinBirthDate,
                value2: maxBirthDate,
                onChange2: onChangeMaxBirthDate
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
                options: getActualAttributes(),
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
            apartment,
            attributeIds,
            bankAccountBankName,
            bankAccountNumber,
            city,
            country,
            email,
            getActualAttributes,
            house,
            isDeleted,
            maxBirthDate,
            maxCreateDate,
            maxModifyDate,
            minBirthDate,
            minCreateDate,
            minModifyDate,
            name,
            onChangeApartment,
            onChangeAttributeIds,
            onChangeBankAccountBankName,
            onChangeBankAccountNumber,
            onChangeCity,
            onChangeCountry,
            onChangeEmail,
            onChangeHouse,
            onChangeIsDeleted,
            onChangeMaxBirthDate,
            onChangeMaxCreateDate,
            onChangeMaxModifyDate,
            onChangeMinBirthDate,
            onChangeMinCreateDate,
            onChangeMinModifyDate,
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
            patronymic,
            phone,
            post,
            postcode,
            province,
            region,
            street,
            surname,
            taxNumber
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useContactsFilters
