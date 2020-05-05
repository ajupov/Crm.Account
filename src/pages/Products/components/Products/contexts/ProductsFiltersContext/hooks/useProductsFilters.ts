import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import ProductsFiltersState, {
    productsFiltersInitialState
} from '../../../states/ProductsFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import ProductsContext from '../../ProductsContext/ProductsContext'
import { getProductTypesAsSelectOptions } from '../../../../../../../helpers/productTypeHelper'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'

const useProductsFilters = (): ProductsFiltersState => {
    const state = useContext(ProductsContext)
    const [types, setTypes] = useState(state.request.types ?? [])
    const [name, setName] = useState(state.request.name ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isApplyEnabled, setIsApplyEnabled] = useState(productsFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productsFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productsFiltersInitialState.isShowMobile)

    const onChangeTypes = useCallback((_: any, { value }: DropdownProps) => {
        setTypes(value as [])
        setIsApplyEnabled(true)
    }, [])

    const onChangeKey = useCallback(
        (_, { value }: InputOnChangeData) => {
            setName(value)
            setIsApplyEnabled(true)
        },
        [setName]
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
            name,
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
    }, [state, types, name, isDeleted, minCreateDate, maxCreateDate, minModifyDate, maxModifyDate])

    const onReset = useCallback(() => {
        setName('')
        setTypes([])
        setIsDeleted(false)
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')

        state.setRequest({
            ...state.request,
            parentProductId: void 0,
            types: [],
            statusIds: [],
            name: '',
            vendorCode: '',
            minPrice: void 0,
            maxPrice: void 0,
            isHidden: false,
            isDeleted: false,
            minCreateDate: '',
            maxCreateDate: '',
            minModifyDate: '',
            maxModifyDate: '',
            allAttributes: false,
            attributes: [],
            allCategoryIds: false,
            categoryIds: [],
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
                type: 'select',
                label: 'Тип',
                values: types.map(x => x as number),
                options: getProductTypesAsSelectOptions(),
                onChange: onChangeTypes
            },
            {
                type: 'text',
                topLabel: 'Наименование',
                value: name,
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
            types,
            onChangeTypes,
            name,
            onChangeKey,
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

export default useProductsFilters
