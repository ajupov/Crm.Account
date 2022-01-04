import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import Customer from '../../../../../../api/customers/models/Customer'
import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import OrderContext from '../../contexts/OrderContext/OrderContext'
import OrderItem from '../../../../../../api/orders/models/OrderItem'
import Product from '../../../../../../api/products/models/Product'
import useCustomerLoad from '../load/useCustomerLoad'
import useCustomersAutocomplete from '../autocomplete/useCustomersAutocomplete'
import { useHistory } from 'react-router'
import useOrderAttributesLoad from '../load/useOrderAttributesLoad'
import useOrderStatusesLoad from '../load/useOrderStatusesLoad'
import useOrderTypesLoad from '../load/useOrderTypesLoad'
import useProductsAutocomplete from '../autocomplete/useProductsAutocomplete'
import useProductsLoad from '../load/useProductsLoad'

interface UseOrderOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useOrderOnChange = (): UseOrderOnChangeReturn => {
    const history = useHistory()
    const state = useContext(OrderContext)
    const { typesAsOptions } = useOrderTypesLoad()
    const { statusesAsOptions } = useOrderStatusesLoad()
    const { attributesAsOptions } = useOrderAttributesLoad()
    const { customer } = useCustomerLoad(state.order.customerId)
    const { loadCustomers, customersAsOptions } = useCustomersAutocomplete()
    const { loadProducts: loadProductsAutocomplete, productsAsOptions } = useProductsAutocomplete()
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)
    const { loadProduct, loadProducts } = useProductsLoad()
    const [products, setProducts] = useState<Product[]>([])

    const orderSum = useCallback((items: OrderItem[]) => items?.reduce((x, y) => x + y.price * y.count, 0) ?? 0, [])

    const onChangeTypeId = useCallback(
        (_, data: DropdownProps) => {
            state.setOrder({ ...state.order, typeId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStatusId = useCallback(
        (_, data: DropdownProps) => {
            state.setOrder({ ...state.order, statusId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCustomerId = useCallback(
        (_, data: DropdownProps) => {
            state.setOrder({ ...state.order, customerId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setOrder({ ...state.order, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStartDateTime = useCallback(
        (_, data: InputOnChangeData) => {
            state.setOrder({ ...state.order, startDateTime: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeEndDateTime = useCallback(
        (_, data: InputOnChangeData) => {
            state.setOrder({ ...state.order, endDateTime: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSum = useCallback(
        (_, data: InputOnChangeData) => {
            state.setOrder({ ...state.order, sum: parseFloat(data.value) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSumWithoutDiscount = useCallback(
        (_, data: InputOnChangeData) => {
            state.setOrder({ ...state.order, sumWithoutDiscount: parseFloat(data.value) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.order.attributeLinks) {
                return
            }

            state.order.attributeLinks[index].orderAttributeId = value

            state.setOrder({
                ...state.order
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeItemProductId = useCallback(
        async (index: number, data: DropdownProps) => {
            if (!state.order.items) {
                return
            }

            const product = await loadProduct(data.value as string)

            const items = [...state.order.items]

            items[index].productId = product?.id
            items[index].productName = product?.name
            items[index].productVendorCode = product?.vendorCode
            items[index].price = product?.price ?? 0
            items[index].count = 1

            state.setOrder({
                ...state.order,
                items,
                sum: orderSum(items),
                sumWithoutDiscount: orderSum(items)
            })

            setIsConfirmEnabled(true)
        },
        [loadProduct, orderSum, state]
    )

    const onChangeItemCount = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.order.items) {
                return
            }

            state.order.items[index].count = parseFloat(data.value)

            state.setOrder({
                ...state.order,
                sum: orderSum(state.order.items),
                sumWithoutDiscount: orderSum(state.order.items)
            })

            setIsConfirmEnabled(true)
        },
        [orderSum, state]
    )

    const onChangeItemProductName = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.order.items) {
                return
            }

            state.order.items[index].productName = data.value

            state.setOrder({
                ...state.order
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeItemProductVendorCode = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.order.items) {
                return
            }

            state.order.items[index].productVendorCode = data.value

            state.setOrder({
                ...state.order
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeItemProductPrice = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.order.items) {
                return
            }

            state.order.items[index].price = parseFloat(data.value)

            state.setOrder({
                ...state.order,
                sum: orderSum(state.order.items),
                sumWithoutDiscount: orderSum(state.order.items)
            })

            setIsConfirmEnabled(true)
        },
        [orderSum, state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.order.attributeLinks) {
                return
            }

            const newLinks = [...state.order.attributeLinks]

            newLinks[index].value = value

            state.setOrder({
                ...state.order,
                attributeLinks: newLinks
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setOrder({
                ...state.order,
                attributeLinks: state.order.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteItem = useCallback(
        (index: number) => {
            const items = state.order.items?.filter((_, i) => i !== index) ?? []

            state.setOrder({
                ...state.order,
                items,
                sum: orderSum(items),
                sumWithoutDiscount: orderSum(items)
            })

            setIsConfirmEnabled(true)
        },
        [orderSum, state]
    )

    const onClickAddItemItem = useCallback(() => {
        const items = [...(state.order.items ?? []), { count: 1, price: 0 }]

        state.setOrder({
            ...state.order,
            items,
            sum: orderSum(items),
            sumWithoutDiscount: orderSum(items)
        })

        setIsConfirmEnabled(true)
    }, [orderSum, state])

    const onClickAddAttributeItem = useCallback(() => {
        state.setOrder({ ...state.order, attributeLinks: [...(state.order.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setOrder({ ...state.order, isDeleted: !state.order.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirmCreate = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickConfirmUpdate = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapCustomerText = useCallback(
        (customer?: Customer) =>
            customer
                ? (
                      (customer.surname ? `${customer.surname} ` : '') +
                      (customer.name ? `${customer.name} ` : '') +
                      (customer.patronymic ? `${customer.patronymic} ` : '') +
                      (customer.phone ? ` (${customer.phone})` : '')
                  ).trim()
                : '',
        []
    )

    const loadProductsByIds = useCallback(async () => {
        const productIds = state.order.items?.map(x => x.productId)

        const products = await loadProducts(productIds)
        setProducts(products ?? [])
    }, [loadProducts, setProducts, state.order.items])

    useEffect(() => {
        void loadProductsByIds()
    }, [loadProductsByIds])

    const fields: FormFieldProps[] = useMemo(
        () => [
            {
                type: 'group',
                fields: [
                    {
                        type: 'dropdown',
                        label: 'Тип',
                        width: '4',
                        value: state.order.typeId,
                        options: typesAsOptions,
                        onChange: onChangeTypeId
                    },
                    {
                        type: 'dropdown',
                        label: 'Статус',
                        width: '4',
                        value: state.order.statusId,
                        options: statusesAsOptions,
                        onChange: onChangeStatusId
                    }
                ]
            },
            {
                type: 'autocomplete',
                label: 'Клиент',
                value: state.order.customerId,
                text: mapCustomerText(customer),
                load: loadCustomers,
                options: customersAsOptions,
                onChange: onChangeCustomerId
            },
            {
                type: 'text',
                label: 'Название',
                value: state.order.name,
                onChange: onChangeName
            },
            {
                type: 'group',
                fields: [
                    {
                        type: 'date',
                        label: 'Дата начала',
                        width: '4',
                        value: state.order.startDateTime,
                        onChange: onChangeStartDateTime
                    },
                    {
                        type: 'date',
                        label: 'Дата окончания',
                        width: '4',
                        value: state.order.endDateTime,
                        onChange: onChangeEndDateTime
                    }
                ]
            },
            {
                type: 'collection',
                label: 'Позиции',
                onClickAdd: onClickAddItemItem,
                onClickDelete: onDeleteItem,
                fields: state.order.items?.map((x, i) => [
                    {
                        type: 'autocomplete',
                        label: 'Продукт',
                        index: i,
                        width: '4',
                        value: x.productId,
                        text: products.find(p => p.id === x.productId)?.name,
                        load: loadProductsAutocomplete,
                        options: productsAsOptions,
                        onChange: onChangeItemProductId
                    },
                    {
                        type: 'number',
                        label: 'Количество',
                        width: '2',
                        index: i,
                        value: x.count,
                        onChange: onChangeItemCount
                    },
                    {
                        type: 'text',
                        label: 'Название позиции',
                        width: '4',
                        index: i,
                        value: x.productName ?? products.find(p => p.id === x.productId)?.name,
                        onChange: onChangeItemProductName
                    },
                    {
                        type: 'text',
                        label: 'Артикул позиции',
                        width: '4',
                        index: i,
                        value: x.productVendorCode ?? products.find(p => p.id === x.productId)?.vendorCode,
                        onChange: onChangeItemProductVendorCode
                    },
                    {
                        type: 'number',
                        label: 'Стоимость',
                        width: '2',
                        index: i,
                        value: x.price ? x.price : products.find(p => p.id === x.productId)?.price,
                        onChange: onChangeItemProductPrice
                    }
                ])
            },
            {
                type: 'group',
                fields: [
                    {
                        type: 'number',
                        label: 'Сумма',
                        width: '3',
                        value: state.order.sum,
                        // ? state.order.sum
                        // : state.order.items?.reduce((x, y) => x + y.price, 0) ?? 0,
                        onChange: onChangeSum
                    },
                    {
                        type: 'number',
                        label: 'Сумма без скидки',
                        width: '3',
                        value: state.order.sumWithoutDiscount,
                        onChange: onChangeSumWithoutDiscount
                    }
                ]
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.order.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.orderAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
                    onChangeValue: onChangeAttributeValue,
                    onClickDelete: onDeleteAttribute
                })),
                onClickAddItem: onClickAddAttributeItem
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.order.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.order.typeId,
            state.order.statusId,
            state.order.customerId,
            state.order.name,
            state.order.startDateTime,
            state.order.endDateTime,
            state.order.items,
            state.order.sum,
            state.order.sumWithoutDiscount,
            state.order.attributeLinks,
            state.order.isDeleted,
            typesAsOptions,
            onChangeTypeId,
            statusesAsOptions,
            onChangeStatusId,
            mapCustomerText,
            customer,
            loadCustomers,
            customersAsOptions,
            onChangeCustomerId,
            onChangeName,
            onChangeStartDateTime,
            onChangeEndDateTime,
            onClickAddItemItem,
            onDeleteItem,
            onChangeSum,
            onChangeSumWithoutDiscount,
            attributesAsOptions,
            onClickAddAttributeItem,
            onChangeIsDeleted,
            products,
            loadProductsAutocomplete,
            productsAsOptions,
            onChangeItemProductId,
            onChangeItemCount,
            onChangeItemProductName,
            onChangeItemProductVendorCode,
            onChangeItemProductPrice,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onDeleteAttribute
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useOrderOnChange
