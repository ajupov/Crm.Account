import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import ProductsFiltersState, {
    productsFiltersInitialState
} from '../../../states/ProductsFiltersState'
import { arrayToDictionary, dictionaryToArray } from '../../../../../../../helpers/dictionaryHelper'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { FilterFieldProps } from '../../../../../../../components/Filter/Filter'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttributesClient from '../../../../../../../../api/products/clients/ProductAttributesClient'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductStatusesClient from '../../../../../../../../api/products/clients/ProductStatusesClient'
import ProductType from '../../../../../../../../api/products/models/ProductType'
import ProductsContext from '../../ProductsContext/ProductsContext'
import { SelectOptionCreateFieldProps } from '../../../../../../../components/Create/Create'
import { toBooleanNullable } from '../../../../../../../utils/boolean/booleanUtils'

const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)
const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)
const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

const useProductsFilters = (): ProductsFiltersState => {
    const MaxLimit = 1000

    const state = useContext(ProductsContext)
    const [type, setType] = useState(state.request.types?.[0] ?? ProductType.Material)
    const [statusIds, setStatusIds] = useState(state.request.statusIds ?? [])
    const [categoryIds, setCategoryIds] = useState(state.request.categoryIds ?? [])
    const [attributeIds, setAttributeIds] = useState(state.request.attributes ?? {})
    const [name, setName] = useState(state.request.name ?? '')
    const [vendorCode, setVendorCode] = useState(state.request.vendorCode ?? '')
    const [isHidden, setIsHidden] = useState(state.request.isHidden)
    const [isDeleted, setIsDeleted] = useState(state.request.isDeleted)
    const [minPrice, setMinPrice] = useState(state.request.minPrice)
    const [maxPrice, setMaxPrice] = useState(state.request.maxPrice)
    const [minCreateDate, setMinCreateDate] = useState(state.request.minCreateDate ?? '')
    const [maxCreateDate, setMaxCreateDate] = useState(state.request.maxCreateDate ?? '')
    const [minModifyDate, setMinModifyDate] = useState(state.request.minModifyDate ?? '')
    const [maxModifyDate, setMaxModifyDate] = useState(state.request.maxModifyDate ?? '')
    const [isApplyEnabled, setIsApplyEnabled] = useState(productsFiltersInitialState.isApplyEnabled)
    const [isResetEnabled, setIsResetEnabled] = useState(productsFiltersInitialState.isResetEnabled)
    const [isShowMobile, setIsShowMobile] = useState(productsFiltersInitialState.isShowMobile)
    const [statuses, setStatuses] = useState<SelectOptionCreateFieldProps[]>([])
    const [categories, setCategories] = useState<SelectOptionCreateFieldProps[]>([])
    const [attributes, setAttributes] = useState<SelectOptionCreateFieldProps[]>([])

    const onChangeType = useCallback((_: any, { value }: CheckboxProps) => setType(value as ProductType), [])

    const onChangeStatusIds = useCallback((_: any, { value }: DropdownProps) => setStatusIds(value as string[]), [])

    const onChangeCategoryIds = useCallback((_: any, { value }: DropdownProps) => setCategoryIds(value as string[]), [])

    const onChangeAttributeIds = useCallback((_: any, { value }: DropdownProps) => setAttributeIds(arrayToDictionary((value as string[]))), [])

    const getStatuses = useCallback(async () => {
        const statuses = await productStatusesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(statuses.statuses?.map(x => ({
            value: x.id,
            text: x.name
        } as SelectOptionCreateFieldProps)) ?? [])
    }, [])

    const getCategories = useCallback(async () => {
        const statuses = await productCategoriesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        // eslint-disable-next-line sonarjs/no-identical-functions
        setCategories(statuses.categories?.map(x => ({
            value: x.id,
            text: x.name
        } as SelectOptionCreateFieldProps)) ?? [])
    }, [])

    const getAttributes = useCallback(async () => {
        const statuses = await productAttributesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(statuses.attributes?.map(x => ({
            value: x.id,
            text: x.key
        } as SelectOptionCreateFieldProps)) ?? [])
    }, [])

    useEffect(() => {
        getStatuses()
        getCategories()
        getAttributes()
    }, [getAttributes, getCategories, getStatuses])

    const onChangeName = useCallback(
        (_, { value }: InputOnChangeData) => {
            setName(value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeVendorCode = useCallback(
        (_, { value }: InputOnChangeData) => {
            setVendorCode(value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeIsHidden = useCallback(
        (_, data: CheckboxProps) => {
            setIsHidden(toBooleanNullable(data.value))
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeIsDeleted = useCallback(
        (_, data: CheckboxProps) => {
            setIsDeleted(toBooleanNullable(data.value))
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMinPrice = useCallback(
        (_, data: InputOnChangeData) => {
            setMinPrice(parseInt(data.value, 10))
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMaxPrice = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxPrice(parseInt(data.value, 10))
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMinCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMaxCreateDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxCreateDate(data.value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMinModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMinModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onChangeMaxModifyDate = useCallback(
        (_, data: InputOnChangeData) => {
            setMaxModifyDate(data.value)
            setIsApplyEnabled(true)
        },
        []
    )

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            types: [type],
            statusIds,
            name,
            isDeleted,
            minPrice,
            maxPrice,
            minCreateDate,
            maxCreateDate,
            minModifyDate,
            maxModifyDate,
            categoryIds,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [categoryIds, isDeleted, maxCreateDate, maxModifyDate, maxPrice, minCreateDate, minModifyDate, minPrice, name, state, statusIds, type])

    const onReset = useCallback(() => {
        setName('')
        setType(ProductType.Material)
        setIsDeleted(false)
        setMinPrice(void 0)
        setMaxPrice(void 0)
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
            attributes: void 0,
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
                onChange: (_, props) => {
                    onChangeType(_, props)
                    state.setRequest({
                        ...state.request,
                        types: [props.value as ProductType],
                    })
                }
            },
            {
                type: 'select',
                label: 'Статус продукта',
                values: statusIds,
                options: statuses,
                onChange: (_, props) => {
                    onChangeStatusIds(_, props)
                    state.setRequest({
                        ...state.request,
                        statusIds: props.value as string[],
                    })
                }
            },
            {
                type: 'select',
                label: 'Категория',
                values: categoryIds,
                options: categories,
                onChange: (_, props) => {
                    onChangeCategoryIds(_, props)
                    state.setRequest({
                        ...state.request,
                        categoryIds: props.value as string[],
                    })
                }
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
                type: 'select',
                label: 'Атрибуты',
                values: dictionaryToArray(attributeIds),
                options: attributes,
                onChange: (_, props) => {
                    onChangeAttributeIds(_, props)
                    state.setRequest({
                        ...state.request,
                        attributes: arrayToDictionary((props.value as string[])),
                    })
                }
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
        [type, statusIds, statuses, categoryIds, categories, name, onChangeName, vendorCode, onChangeVendorCode, minPrice, onChangeMinPrice, maxPrice, onChangeMaxPrice, minCreateDate, onChangeMinCreateDate, maxCreateDate, onChangeMaxCreateDate, minModifyDate, onChangeMinModifyDate, maxModifyDate, onChangeMaxModifyDate, isHidden, onChangeIsHidden, attributeIds, attributes, isDeleted, onChangeIsDeleted, onChangeType, state, onChangeStatusIds, onChangeCategoryIds, onChangeAttributeIds]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}


export default useProductsFilters