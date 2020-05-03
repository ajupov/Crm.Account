import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import ProductAttributesFiltersState, {
    productAttributesFiltersInitialState
} from '../../../states/ProductAttributesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import ProductAttributesContext from '../../ProductAttributesContext/ProductAttributesContext'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'

const useProductAttributesFilters = (): ProductAttributesFiltersState => {
    const state = useContext(ProductAttributesContext)
    const [types, setTypes] = useState(state.request.types ?? [])
    const [key, setKey] = useState(state.request.key ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isApplyEnabled, setIsApplyEnabled] = useState(productAttributesFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productAttributesFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productAttributesFiltersInitialState.isShowMobile)

    // const onChangeTypes = useCallback((_, values: number[]) => {
    //     setTypes(values)
    //     setIsApplyEnabled(true)
    // }, [])

    const onChangeKey = useCallback(
        (_, { value }: InputOnChangeData) => {
            setKey(value)
            setIsApplyEnabled(true)
        },
        [setKey]
    )

    const onChangeIsDeleted = useCallback(
        (_, data: CheckboxProps) => {
            setIsDeleted(toBooleanNullable(data.value))
            setIsApplyEnabled(true)
        },
        [setIsDeleted]
    )

    const onChangeMinCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMinCreateDate]
    )

    const onChangeMaxCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMaxCreateDate]
    )

    const onChangeMinModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMinModifyDate]
    )

    const onChangeMaxModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        [setMaxModifyDate]
    )

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            types,
            key,
            isDeleted,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [state, types, key, isDeleted, minCreateDate, maxCreateDate, minModifyDate, maxModifyDate])

    const onReset = useCallback(() => {
        setKey('')
        setTypes([])
        setIsDeleted(false)
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')

        state.setRequest({
            ...state.request,
            key: '',
            types: [],
            isDeleted: false,
            minCreateDate: '',
            maxCreateDate: '',
            minModifyDate: '',
            maxModifyDate: '',
            offset: 0
        })

        setIsShowMobile(false)
        setIsResetEnabled(false)
    }, [state])

    const onShowMobile = useCallback(() => setIsShowMobile(true), [setIsShowMobile])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [setIsShowMobile])

    const fields: FilterFieldProps[] = useMemo(
        () => [
            {
                type: 'text',
                topLabel: 'Наименование',
                value: key,
                onChange: onChangeKey
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
                type: 'checkbox',
                topLabel: 'Статус',
                label1: 'Все',
                value1: void 0,
                checked1: isDeleted === void 0,
                label2: 'Действующие',
                value2: 'false',
                checked2: isDeleted === false,
                label3: 'Удаленные',
                value3: 'true',
                checked3: isDeleted === true,
                onChange: onChangeIsDeleted
            }
        ],
        [
            isDeleted,
            maxCreateDate,
            maxModifyDate,
            minCreateDate,
            minModifyDate,
            key,
            onChangeIsDeleted,
            onChangeMaxCreateDate,
            onChangeMaxModifyDate,
            onChangeMinCreateDate,
            onChangeMinModifyDate,
            onChangeKey
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useProductAttributesFilters
