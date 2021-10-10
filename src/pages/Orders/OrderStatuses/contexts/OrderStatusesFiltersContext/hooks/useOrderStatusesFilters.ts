import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import OrderStatusesFiltersState, { orderStatusesFiltersInitialState } from '../../../states/OrderStatusesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import OrderStatusesContext from '../../OrderStatusesContext/OrderStatusesContext'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'

// TODO: Move to l10n
const useOrderStatusesFilters = (): OrderStatusesFiltersState => {
    const state = useContext(OrderStatusesContext)
    const [name, setName] = useState(state.request.name ?? '')
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate)
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate)
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate)
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate)
    const [isFinish, setIsFinish] = useState(state.request.isFinish)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(orderStatusesFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(orderStatusesFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(orderStatusesFiltersInitialState.isShowMobile)

    const onChangeName = useCallback((_, data: InputOnChangeData) => {
        setName(data.value)
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

    const onChangeIsFinish = useCallback((_, data: CheckboxProps) => {
        setIsFinish(toBooleanNullable(data.value))
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
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            isFinish,
            isDeleted,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [isDeleted, isFinish, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, name, state])

    const onReset = useCallback(() => {
        setName('')
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
        setIsFinish(false)
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            name: '',
            minCreateDate: void 0,
            maxCreateDate: void 0,
            minModifyDate: void 0,
            maxModifyDate: void 0,
            isFinish: false,
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
                topLabel: 'Наименование',
                value: name,
                onChange: onChangeName
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
                topLabel: 'Конечность',
                label1: 'Все',
                value1: void 0,
                checked1: isFinish === void 0,
                label2: 'Не конечные',
                value2: 'false',
                checked2: isFinish === false,
                label3: 'Конечные',
                value3: 'true',
                checked3: isFinish === true,
                onChange: onChangeIsFinish
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
            isFinish,
            maxCreateDate,
            maxModifyDate,
            minCreateDate,
            minModifyDate,
            name,
            onChangeIsDeleted,
            onChangeIsFinish,
            onChangeMaxCreateDate,
            onChangeMaxModifyDate,
            onChangeMinCreateDate,
            onChangeMinModifyDate,
            onChangeName
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useOrderStatusesFilters
