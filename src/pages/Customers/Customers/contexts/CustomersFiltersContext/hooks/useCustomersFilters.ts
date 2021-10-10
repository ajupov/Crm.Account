import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import CustomersFiltersState, { customersFiltersInitialState } from '../../../states/CustomersFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import CustomersContext from '../../CustomersContext/CustomersContext'
import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'
import useCustomerAttributesLoad from '../../../hooks/load/useCustomerAttributesLoad'
import useCustomerSourcesLoad from '../../../hooks/load/useCustomerSourcesLoad'

// TODO: Move to l10n
const useCustomersFilters = (): CustomersFiltersState => {
    const state = useContext(CustomersContext)
    const { sourcesAsOptions } = useCustomerSourcesLoad()
    const { attributesAsOptions } = useCustomerAttributesLoad()
    const [sourceIds, setSourceIds] = useState(state.request.sourceIds)
    const [surname, setSurname] = useState(state.request.surname ?? '')
    const [name, setName] = useState(state.request.name ?? '')
    const [patronymic, setPatronymic] = useState(state.request.patronymic ?? '')
    const [phone, setPhone] = useState(state.request.phone ?? '')
    const [email, setEmail] = useState(state.request.email ?? '')
    const [minBirthDate, setMinBirthDate] = useState(state.request.minBirthDate)
    const [maxBirthDate, setMaxBirthDate] = useState(state.request.maxBirthDate)
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate)
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate)
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate)
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(customersFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(customersFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(customersFiltersInitialState.isShowMobile)

    const onChangeSourceId = useCallback((_: any, data: DropdownProps) => {
        setSourceIds([data.value as string])
        setIsApplyEnabled(true)
    }, [])

    const onChangeName = useCallback((_, data: InputOnChangeData) => {
        setName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeSurname = useCallback((_, data: InputOnChangeData) => {
        setSurname(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangePatronymic = useCallback((_, data: InputOnChangeData) => {
        setPatronymic(data.value)
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

    const onChangeMinBirthDate = useCallback((_, data: InputOnChangeData) => {
        setMinBirthDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxBirthDate = useCallback((_, data: InputOnChangeData) => {
        setMaxBirthDate(data.value)
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
            sourceIds,
            surname,
            name,
            patronymic,
            phone,
            email,
            minBirthDate,
            maxBirthDate,
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
        attributeIds,
        email,
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
        sourceIds,
        state,
        surname
    ])

    const onReset = useCallback(() => {
        setSourceIds([])
        setSurname('')
        setName('')
        setPatronymic('')
        setPhone('')
        setEmail('')
        setMinBirthDate(void 0)
        setMaxBirthDate(void 0)
        setAttributeIds({})
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            sourceIds: [],
            surname: void 0,
            name: void 0,
            patronymic: void 0,
            phone: void 0,
            email: void 0,
            minBirthDate: void 0,
            maxBirthDate: void 0,
            allAttributes: true,
            attributes: void 0,
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
                type: 'dropdown',
                label: 'Иточник',
                value: sourceIds ? sourceIds[0] : '',
                options: sourcesAsOptions,
                onChange: onChangeSourceId
            },
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
                type: 'date',
                topLabel: 'Дата рождения',
                value1: minBirthDate,
                onChange1: onChangeMinBirthDate,
                value2: maxBirthDate,
                onChange2: onChangeMaxBirthDate
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
            sourceIds,
            sourcesAsOptions,
            onChangeSourceId,
            surname,
            onChangeSurname,
            name,
            onChangeName,
            patronymic,
            onChangePatronymic,
            phone,
            onChangePhone,
            email,
            onChangeEmail,
            minBirthDate,
            onChangeMinBirthDate,
            maxBirthDate,
            onChangeMaxBirthDate,
            attributeIds,
            attributesAsOptions,
            onChangeAttributeIds,
            minCreateDate,
            onChangeMinCreateDate,
            maxCreateDate,
            onChangeMaxCreateDate,
            minModifyDate,
            onChangeMinModifyDate,
            maxModifyDate,
            onChangeMaxModifyDate,
            isDeleted,
            onChangeIsDeleted
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useCustomersFilters
