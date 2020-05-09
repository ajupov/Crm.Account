import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import ProductsFiltersState, {
    productsFiltersInitialState
} from '../../../states/ProductsFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import ProductType from '../../../../../../../../api/products/models/ProductType'
import ProductsContext from '../../ProductsContext/ProductsContext'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'

const useProductsFilters = (): ProductsFiltersState => {
    const state = useContext(ProductsContext)
    const [type, setType] = useState(state.request.types?.[0] ?? ProductType.Material)
    const [name, setName] = useState(state.request.name ?? '')
    const [vendorCode, setVendorCode] = useState(state.request.vendorCode ?? '')
    const [isHidden, setIsHidden] = useState(state.request.isHidden)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isApplyEnabled, setIsApplyEnabled] = useState(productsFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productsFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productsFiltersInitialState.isShowMobile)

    const onChangeType = useCallback((_: any, { value }: CheckboxProps) => {
        setType(value as ProductType)
        setIsApplyEnabled(true)
    }, [])

    const onChangeName = useCallback(
        (_, { value }: InputOnChangeData) => {
            setName(value)
            setIsApplyEnabled(true)
        },
        [setName]
    )

    const onChangeVendorCode = useCallback(
        (_, { value }: InputOnChangeData) => {
            setVendorCode(value)
            setIsApplyEnabled(true)
        },
        [setVendorCode]
    )

    const onChangeIsHidden = useCallback(
        (_, data: CheckboxProps) => {
            setIsHidden(toBooleanNullable(data.value))
            setIsApplyEnabled(true)
        },
        [setIsHidden]
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
            types: [type],
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
    }, [state, type, name, isDeleted, minCreateDate, maxCreateDate, minModifyDate, maxModifyDate])

    const onReset = useCallback(() => {
        setName('')
        setType(ProductType.Material)
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
                type: 'radio',
                isHorizontal: true,
                topLabel: 'Тип',
                label1: 'Товары',
                value1: ProductType.Material,
                checked1: type === ProductType.Material,
                label2: 'Услуги',
                value2: ProductType.NonMaterial,
                checked2: type === ProductType.NonMaterial,
                onChange: onChangeType
            },
            {
                type: 'text',
                topLabel: 'Наименование',
                value: name,
                onChange: onChangeName
            },
            {
                type: 'text',
                topLabel: 'Артикул',
                value: vendorCode,
                onChange: onChangeVendorCode
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
                isHorizontal: true,
                label1: 'Активные',
                value1: 'false',
                checked1: isHidden === false,
                label2: 'Черновики',
                value2: 'true',
                checked2: isHidden === true,
                onChange: onChangeIsHidden
            },
            {
                type: 'radio',
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
        [type, onChangeType, name, onChangeName, vendorCode, onChangeVendorCode, minCreateDate, onChangeMinCreateDate, maxCreateDate, onChangeMaxCreateDate, minModifyDate, onChangeMinModifyDate, maxModifyDate, onChangeMaxModifyDate, isHidden, onChangeIsHidden, isDeleted, onChangeIsDeleted]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useProductsFilters
