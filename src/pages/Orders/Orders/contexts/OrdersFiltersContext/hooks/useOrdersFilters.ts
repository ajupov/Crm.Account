import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import OrdersFiltersState, { ordersFiltersInitialState } from '../../../states/OrdersFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import OrdersContext from '../../OrdersContext/OrdersContext'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'
import useCustomersAutocomplete from '../../../hooks/autocomplete/useCustomersAutocomplete'
import useOrderAttributesLoad from '../../../hooks/load/useOrderAttributesLoad'
import useOrderStatusesLoad from '../../../hooks/load/useOrderStatusesLoad'
import useOrderTypesLoad from '../../../hooks/load/useOrderTypesLoad'

// TODO: Move to l10n
const useOrdersFilters = (): OrdersFiltersState => {
    const state = useContext(OrdersContext)
    const { typesAsOptions } = useOrderTypesLoad()
    const { statusesAsOptions } = useOrderStatusesLoad()
    const { loadCustomers, customersAsOptions } = useCustomersAutocomplete()
    const { attributesAsOptions } = useOrderAttributesLoad()
    const [typeIds, setTypeIds] = useState(state.request.typeIds)
    const [statusIds, setStatusIds] = useState(state.request.statusIds)
    const [customerIds, setCustomerIds] = useState(state.request.customerIds)
    const [name, setName] = useState(state.request.name ?? '')
    const [minStartDateTime, setMinStartDateTime] = useState(state.request.minStartDateTime)
    const [maxStartDateTime, setMaxStartDateTime] = useState(state.request.maxStartDateTime)
    const [minEndDateTime, setMinEndDateTime] = useState(state.request.minEndDateTime)
    const [maxEndDateTime, setMaxEndDateTime] = useState(state.request.maxEndDateTime)
    const [minSum, setMinSum] = useState(state.request.minSum)
    const [maxSum, setMaxSum] = useState(state.request.maxSum)
    const [minSumWithoutDiscount, setMinSumWithoutDiscount] = useState(state.request.minSumWithoutDiscount)
    const [maxSumWithoutDiscount, setMaxSumWithoutDiscount] = useState(state.request.maxSumWithoutDiscount)
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate)
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate)
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate)
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(ordersFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(ordersFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(ordersFiltersInitialState.isShowMobile)

    const onChangeStatusId = useCallback((_: any, data: DropdownProps) => {
        setStatusIds([data.value as string])
        setIsApplyEnabled(true)
    }, [])

    const onChangeTypeId = useCallback((_: any, data: DropdownProps) => {
        setTypeIds([data.value as string])
        setIsApplyEnabled(true)
    }, [])

    const onChangeCustomerIds = useCallback((_: any, data: DropdownProps) => {
        setCustomerIds(data.value as string[])
        setIsApplyEnabled(true)
    }, [])

    const onChangeName = useCallback((_, data: InputOnChangeData) => {
        setName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinStartDateTime = useCallback((_, data: InputOnChangeData) => {
        setMinStartDateTime(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxStartDateTime = useCallback((_, data: InputOnChangeData) => {
        setMaxStartDateTime(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinEndDateTime = useCallback((_, data: InputOnChangeData) => {
        setMinEndDateTime(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxEndDateTime = useCallback((_, data: InputOnChangeData) => {
        setMaxEndDateTime(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinSum = useCallback((_, data: InputOnChangeData) => {
        setMinSum(parseInt(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxSum = useCallback((_, data: InputOnChangeData) => {
        setMaxSum(parseInt(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinSumWithoutDiscount = useCallback((_, data: InputOnChangeData) => {
        setMinSumWithoutDiscount(parseInt(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxSumWithoutDiscount = useCallback((_, data: InputOnChangeData) => {
        setMaxSumWithoutDiscount(parseInt(data.value))
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
            typeIds,
            statusIds,
            customerIds,
            name,
            minStartDateTime,
            maxStartDateTime,
            minEndDateTime,
            maxEndDateTime,
            minSum,
            maxSum,
            minSumWithoutDiscount,
            maxSumWithoutDiscount,
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
        customerIds,
        isDeleted,
        maxCreateDate,
        maxEndDateTime,
        maxModifyDate,
        maxStartDateTime,
        maxSum,
        maxSumWithoutDiscount,
        minCreateDate,
        minEndDateTime,
        minModifyDate,
        minStartDateTime,
        minSum,
        minSumWithoutDiscount,
        name,
        state,
        statusIds,
        typeIds
    ])

    const onReset = useCallback(() => {
        setTypeIds([])
        setStatusIds([])
        setCustomerIds([])
        setName('')
        setMinStartDateTime(void 0)
        setMaxStartDateTime(void 0)
        setMinEndDateTime(void 0)
        setMaxEndDateTime(void 0)
        setMinSum(void 0)
        setMaxSum(void 0)
        setMinSumWithoutDiscount(void 0)
        setMaxSumWithoutDiscount(void 0)
        setAttributeIds({})
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            typeIds: [],
            statusIds: [],
            customerIds: void 0,
            name: void 0,
            minStartDateTime: void 0,
            maxStartDateTime: void 0,
            minEndDateTime: void 0,
            maxEndDateTime: void 0,
            minSum: void 0,
            maxSum: void 0,
            minSumWithoutDiscount: void 0,
            maxSumWithoutDiscount: void 0,
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
                label: 'Тип',
                value: typeIds ? typeIds[0] : '',
                options: typesAsOptions,
                onChange: onChangeTypeId
            },
            {
                type: 'dropdown',
                label: 'Статус',
                value: statusIds ? statusIds[0] : '',
                options: statusesAsOptions,
                onChange: onChangeStatusId
            },
            {
                type: 'autocomplete',
                label: 'Клиент',
                value: customerIds,
                load: loadCustomers,
                options: customersAsOptions,
                onChange: onChangeCustomerIds
            },
            {
                type: 'text',
                topLabel: 'Имя',
                value: name,
                onChange: onChangeName
            },
            {
                type: 'date',
                topLabel: 'Дата начала',
                value1: minStartDateTime,
                onChange1: onChangeMinStartDateTime,
                value2: maxStartDateTime,
                onChange2: onChangeMaxStartDateTime
            },
            {
                type: 'date',
                topLabel: 'Дата окончания',
                value1: minEndDateTime,
                onChange1: onChangeMinEndDateTime,
                value2: maxEndDateTime,
                onChange2: onChangeMaxEndDateTime
            },
            {
                type: 'number',
                topLabel: 'Стоимость',
                value1: minSum,
                onChange1: onChangeMinSum,
                value2: maxSum,
                onChange2: onChangeMaxSum
            },
            {
                type: 'number',
                topLabel: 'Стоимость без скидки',
                value1: minSumWithoutDiscount,
                onChange1: onChangeMinSumWithoutDiscount,
                value2: maxSumWithoutDiscount,
                onChange2: onChangeMaxSumWithoutDiscount
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
            typeIds,
            typesAsOptions,
            onChangeTypeId,
            statusIds,
            statusesAsOptions,
            onChangeStatusId,
            customerIds,
            loadCustomers,
            customersAsOptions,
            onChangeCustomerIds,
            name,
            onChangeName,
            minStartDateTime,
            onChangeMinStartDateTime,
            maxStartDateTime,
            onChangeMaxStartDateTime,
            minEndDateTime,
            onChangeMinEndDateTime,
            maxEndDateTime,
            onChangeMaxEndDateTime,
            minSum,
            onChangeMinSum,
            maxSum,
            onChangeMaxSum,
            minSumWithoutDiscount,
            onChangeMinSumWithoutDiscount,
            maxSumWithoutDiscount,
            onChangeMaxSumWithoutDiscount,
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

export default useOrdersFilters
