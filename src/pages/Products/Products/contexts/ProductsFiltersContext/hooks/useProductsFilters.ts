import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import ProductsFiltersState, { productsFiltersInitialState } from '../../../states/ProductsFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../utils/dictionary/dictionaryUtils'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import ProductType from '../../../../../../../api/products/models/ProductType'
import ProductsContext from '../../ProductsContext/ProductsContext'
import { toBooleanNullable } from '../../../../../../utils/boolean/booleanUtils'
import useProductAttributesLoad from '../../../hooks/load/useProductAttributesLoad'
import useProductCategoriesLoad from '../../../hooks/load/useProductCategoriesLoad'
import useProductStatusesLoad from '../../../hooks/load/useProductStatusesLoad'
import useProductsAutocomplete from '../../../hooks/autocomplete/useProductsAutocomplete'

// TODO: Move to l10n
const useProductsFilters = (): ProductsFiltersState => {
    const state = useContext(ProductsContext)
    const { loadProducts, productsAsOptions } = useProductsAutocomplete()
    const { statusesAsOptions } = useProductStatusesLoad()
    const { categoriesAsOptions } = useProductCategoriesLoad()
    const { attributesAsOptions } = useProductAttributesLoad()
    const [type, setType] = useState(state.request.types?.[0] ?? ProductType.Material)
    const [parentProductId, setParentProductId] = useState(state.request.parentProductId)
    const [statusIds, setStatusIds] = useState(state.request.statusIds ?? [])
    const [categoryIds, setCategoryIds] = useState(state.request.categoryIds ?? [])
    const [name, setName] = useState(state.request.name ?? '')
    const [vendorCode, setVendorCode] = useState(state.request.vendorCode ?? '')
    const [minPrice, setMinPrice] = useState(state.request.minPrice)
    const [maxPrice, setMaxPrice] = useState(state.request.maxPrice)
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [isHidden, setIsHidden] = useState(state.request.isHidden)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [isApplyEnabled, setIsApplyEnabled] = useState(productsFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productsFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productsFiltersInitialState.isShowMobile)

    const onChangeType = useCallback((_: any, data: CheckboxProps) => {
        setType(data.value as ProductType)
    }, [])

    const ontParentProductId = useCallback((_: any, data: DropdownProps) => {
        setParentProductId(data.value as string)
        setIsApplyEnabled(true)
    }, [])

    const onChangeStatusIds = useCallback((_: any, data: DropdownProps) => {
        setStatusIds(data.value as string[])
        setIsApplyEnabled(true)
    }, [])

    const onChangeCategoryIds = useCallback((_: any, data: DropdownProps) => {
        setCategoryIds(data.value as string[])
        setIsApplyEnabled(true)
    }, [])

    const onChangeName = useCallback((_, data: InputOnChangeData) => {
        setName(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeVendorCode = useCallback((_, data: InputOnChangeData) => {
        setVendorCode(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMinPrice = useCallback((_, data: InputOnChangeData) => {
        setMinPrice(parseInt(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxPrice = useCallback((_, data: InputOnChangeData) => {
        setMaxPrice(parseInt(data.value))
        setIsApplyEnabled(true)
    }, [])

    const onChangeAttributeIds = useCallback((_: any, data: DropdownProps) => {
        setAttributeIds(arrayToDictionary(data.value as string[]))
        setIsApplyEnabled(true)
    }, [])

    const onChangeIsHidden = useCallback((_, data: CheckboxProps) => {
        setIsHidden(toBooleanNullable(data.value))
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
            types: [type],
            parentProductId,
            statusIds,
            allCategoryIds: false,
            categoryIds,
            name,
            vendorCode,
            minPrice,
            maxPrice,
            allAttributes: true,
            attributes: attributeIds,
            isHidden,
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
        categoryIds,
        isDeleted,
        isHidden,
        maxCreateDate,
        maxModifyDate,
        maxPrice,
        minCreateDate,
        minModifyDate,
        minPrice,
        name,
        parentProductId,
        state,
        statusIds,
        type,
        vendorCode
    ])

    const onReset = useCallback(() => {
        setType(ProductType.Material)
        setParentProductId(void 0)
        setStatusIds([])
        setCategoryIds([])
        setName('')
        setVendorCode('')
        setMinPrice(void 0)
        setMaxPrice(void 0)
        setAttributeIds({})
        setIsHidden(false)
        setMinCreateDate('')
        setMaxCreateDate('')
        setMinModifyDate('')
        setMaxModifyDate('')
        setIsDeleted(false)

        state.setRequest({
            ...state.request,
            types: [],
            parentProductId: void 0,
            statusIds: [],
            allCategoryIds: false,
            categoryIds: [],
            name: '',
            vendorCode: '',
            minPrice: void 0,
            maxPrice: void 0,
            allAttributes: true,
            attributes: void 0,
            isHidden: false,
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

    const onShowMobile = useCallback(() => setIsShowMobile(true), [setIsShowMobile])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [setIsShowMobile])

    const fields: FilterFormFieldProps[] = useMemo(
        () => [
            {
                type: 'radio',
                isHorizontal: true,
                label1: 'Товары',
                value1: ProductType.Material,
                checked1: type === ProductType.Material,
                label2: 'Услуги',
                value2: ProductType.NonMaterial,
                checked2: type === ProductType.NonMaterial,
                onChange: (_, props) => {
                    onChangeType(_, props)
                    setIsShowMobile(false)
                    state.setRequest({
                        ...state.request,
                        types: [props.value as ProductType]
                    })
                }
            },
            {
                type: 'autocomplete',
                label: 'Родительский продукт',
                value: parentProductId,
                load: loadProducts,
                options: productsAsOptions,
                onChange: ontParentProductId
            },
            {
                type: 'dropdown',
                multiple: true,
                label: 'Статус',
                value: statusIds,
                options: statusesAsOptions,
                onChange: onChangeStatusIds
            },
            {
                type: 'dropdown',
                label: 'Категория',
                multiple: true,
                value: categoryIds,
                options: categoriesAsOptions,
                onChange: onChangeCategoryIds
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
                type: 'number',
                topLabel: 'Цена',
                value1: minPrice,
                onChange1: onChangeMinPrice,
                value2: maxPrice,
                onChange2: onChangeMaxPrice
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
                type: 'radio',
                topLabel: 'Черновик',
                label1: 'Да',
                value1: 'true',
                checked1: isHidden === true,
                label2: 'Нет',
                value2: 'false',
                checked2: isHidden === false,
                onChange: onChangeIsHidden
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
            type,
            parentProductId,
            loadProducts,
            productsAsOptions,
            ontParentProductId,
            statusIds,
            statusesAsOptions,
            onChangeStatusIds,
            categoryIds,
            categoriesAsOptions,
            onChangeCategoryIds,
            name,
            onChangeName,
            vendorCode,
            onChangeVendorCode,
            minPrice,
            onChangeMinPrice,
            maxPrice,
            onChangeMaxPrice,
            attributeIds,
            attributesAsOptions,
            onChangeAttributeIds,
            isHidden,
            onChangeIsHidden,
            minCreateDate,
            onChangeMinCreateDate,
            maxCreateDate,
            onChangeMaxCreateDate,
            minModifyDate,
            onChangeMinModifyDate,
            maxModifyDate,
            onChangeMaxModifyDate,
            isDeleted,
            onChangeIsDeleted,
            onChangeType,
            state
        ]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useProductsFilters
