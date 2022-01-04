import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import StockBalancesFiltersState, { stockBalancesFiltersInitialState } from '../../../states/StockBalancesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import StockBalancesContext from '../../StockBalancesContext/StockBalancesContext'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'
import useProductsAutocomplete from '../../../hooks/autocomplete/useProductsAutocomplete'
import useStockRoomsLoad from '../../../hooks/load/useStockRoomsLoad'

// TODO: Move to l10n
const useStockBalancesFilters = (): StockBalancesFiltersState => {
    const state = useContext(StockBalancesContext)
    const [roomIds, setRoomIds] = useState(state.request.roomIds)
    const [productIds, setProductIds] = useState(state.request.productIds)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate)
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate)
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate)
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(stockBalancesFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(stockBalancesFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(stockBalancesFiltersInitialState.isShowMobile)
    const { roomsAsOptions } = useStockRoomsLoad()
    const { loadProducts, productsAsOptions } = useProductsAutocomplete()

    const onChangeRoomIds = useCallback((_: any, data: DropdownProps) => {
        setRoomIds(data.value as string[])
        setIsApplyEnabled(true)
    }, [])

    const onChangeProductIds = useCallback((_: any, data: DropdownProps) => {
        setProductIds(data.value as string[])
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
            roomIds,
            productIds,
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
    }, [isDeleted, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, productIds, roomIds, state])

    const onReset = useCallback(() => {
        setRoomIds(void 0)
        setProductIds(void 0)
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            roomIds: void 0,
            productIds: void 0,
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
                label: 'Склад',
                multiple: true,
                value: roomIds ?? [],
                options: roomsAsOptions,
                onChange: onChangeRoomIds
            },
            {
                type: 'autocomplete',
                label: 'Продукт',
                multiple: true,
                value: productIds ?? [],
                load: loadProducts,
                options: productsAsOptions,
                onChange: onChangeProductIds
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
            roomIds,
            roomsAsOptions,
            onChangeRoomIds,
            productIds,
            loadProducts,
            productsAsOptions,
            onChangeProductIds,
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

export default useStockBalancesFilters
