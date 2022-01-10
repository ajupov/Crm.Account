import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getStockConsumptionTypeName,
    getStockConsumptionTypesAsSelectOptions
} from '../../helpers/stockConsumptionTypeHelper'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import Product from '../../../../../../api/products/models/Product'
import StockConsumptionContext from '../../contexts/StockConsumptionContext/StockConsumptionContext'
import StockConsumptionType from '../../../../../../api/stock/models/StockConsumptionType'
import { useHistory } from 'react-router'
import useOrderLoad from '../load/useOrderLoad'
import useOrdersAutocomplete from '../autocomplete/useOrdersAutocomplete'
import useProductsAutocomplete from '../autocomplete/useProductsAutocomplete'
import useProductsLoad from '../load/useProductsLoad'
import useStockRoomsLoad from '../load/useStockRoomsLoad'
import useSupplierLoad from '../load/useSupplierLoad'
import useSuppliersAutocomplete from '../autocomplete/useSuppliersAutocomplete'

interface UseStockConsumptionOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockConsumptionOnChange = (): UseStockConsumptionOnChangeReturn => {
    const history = useHistory()
    const state = useContext(StockConsumptionContext)
    const { roomsAsOptions } = useStockRoomsLoad()
    const { loadProduct, loadProducts } = useProductsLoad()
    const { supplier } = useSupplierLoad(state.stockConsumption.supplierId)
    const { order } = useOrderLoad(state.stockConsumption.orderId)
    const { loadSuppliers, suppliersAsOptions } = useSuppliersAutocomplete()
    const { loadOrders, ordersAsOptions } = useOrdersAutocomplete()
    const { loadProducts: loadProductsAutocomplete, productsAsOptions } = useProductsAutocomplete()
    const [products, setProducts] = useState<Product[]>([])

    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setStockConsumption({ ...state.stockConsumption, type: data.value as StockConsumptionType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeSupplierId = useCallback(
        (_, data: DropdownProps) => {
            state.setStockConsumption({ ...state.stockConsumption, supplierId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeOrderId = useCallback(
        (_, data: DropdownProps) => {
            state.setStockConsumption({ ...state.stockConsumption, orderId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setStockConsumption({ ...state.stockConsumption, isDeleted: !state.stockConsumption.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddItemItem = useCallback(() => {
        const items = [...(state.stockConsumption.items ?? []), { count: 1 }]

        state.setStockConsumption({
            ...state.stockConsumption,
            items
        })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeItemProductId = useCallback(
        async (index: number, data: DropdownProps) => {
            if (!state.stockConsumption.items) {
                return
            }

            const product = await loadProduct(data.value as string)

            const items = [...state.stockConsumption.items]

            items[index].productId = product?.id
            items[index].count = 1

            state.setStockConsumption({
                ...state.stockConsumption,
                items
            })

            setIsConfirmEnabled(true)
        },
        [loadProduct, state]
    )

    const onChangeItemRoomId = useCallback(
        (index: number, data: DropdownProps) => {
            if (!state.stockConsumption.items) {
                return
            }

            const room = roomsAsOptions.find(p => p.value === (data.value as string))

            const items = [...state.stockConsumption.items]

            items[index].roomId = room?.value as string
            items[index].count = 1

            state.setStockConsumption({
                ...state.stockConsumption,
                items
            })

            setIsConfirmEnabled(true)
        },
        [roomsAsOptions, state]
    )

    const onChangeItemCount = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.stockConsumption.items) {
                return
            }

            state.stockConsumption.items[index].count = parseFloat(data.value)

            state.setStockConsumption({
                ...state.stockConsumption
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteItem = useCallback(
        (index: number) => {
            const items = state.stockConsumption.items?.filter((_, i) => i !== index) ?? []

            state.setStockConsumption({
                ...state.stockConsumption,
                items
            })

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

    const loadProductsByIds = useCallback(async () => {
        const productIds = state.stockConsumption.items?.map(x => x.productId)

        const products = await loadProducts(productIds)
        setProducts(products ?? [])
    }, [loadProducts, state.stockConsumption.items])

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
                        required: true,
                        label: 'Тип',
                        width: '4',
                        value: state.stockConsumption.type,
                        text: getStockConsumptionTypeName(state.stockConsumption.type),
                        options: getStockConsumptionTypesAsSelectOptions(),
                        onChange: onChangeType
                    },
                    {
                        type: 'autocomplete',
                        label: 'Поставщик',
                        width: '4',
                        value: state.stockConsumption.supplierId,
                        text: supplier?.name,
                        load: loadSuppliers,
                        options: suppliersAsOptions,
                        onChange: onChangeSupplierId
                    },
                    {
                        type: 'autocomplete',
                        label: 'Заказ',
                        width: '4',
                        value: state.stockConsumption.orderId,
                        text: order?.name,
                        load: loadOrders,
                        options: ordersAsOptions,
                        onChange: onChangeOrderId
                    }
                ]
            },
            {
                type: 'collection',
                label: 'Позиции',
                onClickAdd: onClickAddItemItem,
                onClickDelete: onDeleteItem,
                fields: state.stockConsumption.items?.map((x, i) => [
                    {
                        type: 'dropdown',
                        label: 'Склад',
                        index: i,
                        width: '4',
                        value: x.roomId,
                        text: roomsAsOptions.find(p => p.value === x.roomId)?.text,
                        options: roomsAsOptions,
                        onChange: onChangeItemRoomId
                    },
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
                    }
                ])
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.stockConsumption.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.stockConsumption.type,
            state.stockConsumption.supplierId,
            state.stockConsumption.orderId,
            state.stockConsumption.items,
            state.stockConsumption.isDeleted,
            onChangeType,
            supplier,
            loadSuppliers,
            suppliersAsOptions,
            onChangeSupplierId,
            order,
            loadOrders,
            ordersAsOptions,
            onChangeOrderId,
            onClickAddItemItem,
            onDeleteItem,
            onChangeIsDeleted,
            roomsAsOptions,
            onChangeItemRoomId,
            products,
            loadProductsAutocomplete,
            productsAsOptions,
            onChangeItemProductId,
            onChangeItemCount
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useStockConsumptionOnChange
