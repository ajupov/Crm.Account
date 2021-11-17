import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import SuppliersFiltersState, { suppliersFiltersInitialState } from '../../../states/SuppliersFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import SuppliersContext from '../../SuppliersContext/SuppliersContext'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'
import useSupplierAttributesLoad from '../../../hooks/load/useSupplierAttributesLoad'

// TODO: Move to l10n
const useSuppliersFilters = (): SuppliersFiltersState => {
    const state = useContext(SuppliersContext)
    const { attributesAsOptions } = useSupplierAttributesLoad()
    const [name, setName] = useState(state.request.name ?? '')
    const [phone, setPhone] = useState(state.request.phone ?? '')
    const [email, setEmail] = useState(state.request.email ?? '')
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate)
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate)
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate)
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(suppliersFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(suppliersFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(suppliersFiltersInitialState.isShowMobile)

    const onChangeName = useCallback((_, data: InputOnChangeData) => {
        setName(data.value)
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
            name,
            phone,
            email,
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
    }, [attributeIds, email, isDeleted, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, name, phone, state])

    const onReset = useCallback(() => {
        setName('')
        setPhone('')
        setEmail('')
        setAttributeIds({})
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            name: void 0,
            phone: void 0,
            email: void 0,
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
                type: 'text',
                label: 'Имя',
                value: name,
                onChange: onChangeName
            },
            {
                type: 'text',
                label: 'Телефон',
                value: phone,
                onChange: onChangePhone
            },
            {
                type: 'text',
                label: 'Email',
                value: email,
                onChange: onChangeEmail
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
                label: 'Дата создания',
                value1: minCreateDate,
                onChange1: onChangeMinCreateDate,
                value2: maxCreateDate,
                onChange2: onChangeMaxCreateDate
            },
            {
                type: 'date',
                label: 'Дата изменения',
                value1: minModifyDate,
                onChange1: onChangeMinModifyDate,
                value2: maxModifyDate,
                onChange2: onChangeMaxModifyDate
            },
            {
                type: 'radio',
                label: 'Удаленность',
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
            name,
            onChangeName,
            phone,
            onChangePhone,
            email,
            onChangeEmail,
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

export default useSuppliersFilters
