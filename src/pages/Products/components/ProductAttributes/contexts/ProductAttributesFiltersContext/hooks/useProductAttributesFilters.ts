import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import ProductAttributesFiltersState, {
    productAttributesFiltersInitialState
} from '../../../states/ProductAttributesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import ProductAttributesContext from '../../ProductAttributesContext/ProductAttributesContext'
import { getAttributeTypesAsSelectOptions } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'

const useProductAttributesFilters = (): ProductAttributesFiltersState => {
    const state = useContext(ProductAttributesContext)
    const [types, setTypes] = useState(state.request.types ?? [])
    const [key, setKey] = useState(state.request.key ?? '')
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(productAttributesFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productAttributesFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productAttributesFiltersInitialState.isShowMobile)

    const onChangeTypes = useCallback((_: any, { value }: DropdownProps) => {
        setTypes(value as [])
        setIsApplyEnabled(true)
    }, [])

    const onChangeKey = useCallback((_, { value }: InputOnChangeData) => {
        setKey(value)
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
            types,
            key,
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
    }, [isDeleted, key, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, state, types])

    const onReset = useCallback(() => {
        setTypes([])
        setKey('')
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            types: [],
            key: '',
            minCreateDate: '',
            maxCreateDate: '',
            minModifyDate: '',
            maxModifyDate: '',
            isDeleted: false,
            offset: 0
        })

        setIsShowMobile(false)
        setIsResetEnabled(false)
    }, [state])

    const onShowMobile = useCallback(() => setIsShowMobile(true), [])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [])

    const fields: FilterFieldProps[] = useMemo(
        () => [
            {
                type: 'select',
                label: 'Тип',
                values: types.map(x => x as number),
                options: getAttributeTypesAsSelectOptions(),
                onChange: onChangeTypes
            },
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
            isDeleted,
            key,
            maxCreateDate,
            maxModifyDate,
            minCreateDate,
            minModifyDate,
            onChangeIsDeleted,
            onChangeKey,
            onChangeMaxCreateDate,
            onChangeMaxModifyDate,
            onChangeMinCreateDate,
            onChangeMinModifyDate,
            onChangeTypes,
            types
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useProductAttributesFilters
