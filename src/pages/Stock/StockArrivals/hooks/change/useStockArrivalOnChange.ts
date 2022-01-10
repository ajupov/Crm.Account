import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getStockArrivalTypeName, getStockArrivalTypesAsSelectOptions } from '../../helpers/stockArrivalTypeHelper'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import Product from '../../../../../../api/products/models/Product'
import StockArrivalContext from '../../contexts/StockArrivalContext/StockArrivalContext'
import StockArrivalType from '../../../../../../api/stock/models/StockArrivalType'
import { useHistory } from 'react-router'
import useOrderLoad from '../load/useOrderLoad'
import useOrdersAutocomplete from '../autocomplete/useOrdersAutocomplete'
import useProductsAutocomplete from '../autocomplete/useProductsAutocomplete'
import useProductsLoad from '../load/useProductsLoad'
import useStockRoomsLoad from '../load/useStockRoomsLoad'

interface UseStockArrivalOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockArrivalOnChange = (): UseStockArrivalOnChangeReturn => {
    const history = useHistory()
    const state = useContext(StockArrivalContext)
    const { roomsAsOptions } = useStockRoomsLoad()
    const { loadProduct, loadProducts } = useProductsLoad()
    const { order } = useOrderLoad(state.stockArrival.orderId)
    const { loadOrders, ordersAsOptions } = useOrdersAutocomplete()
    const { loadProducts: loadProductsAutocomplete, productsAsOptions } = useProductsAutocomplete()
    const [products, setProducts] = useState<Product[]>([])

    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setStockArrival({ ...state.stockArrival, type: data.value as StockArrivalType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeOrderId = useCallback(
        (_, data: DropdownProps) => {
            state.setStockArrival({ ...state.stockArrival, orderId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setStockArrival({ ...state.stockArrival, isDeleted: !state.stockArrival.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddItemItem = useCallback(() => {
        const items = [...(state.stockArrival.items ?? []), { count: 1 }]

        state.setStockArrival({
            ...state.stockArrival,
            items
        })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeItemProductId = useCallback(
        async (index: number, data: DropdownProps) => {
            if (!state.stockArrival.items) {
                return
            }

            const product = await loadProduct(data.value as string)

            const items = [...state.stockArrival.items]

            items[index].productId = product?.id
            items[index].count = 1

            state.setStockArrival({
                ...state.stockArrival,
                items
            })

            setIsConfirmEnabled(true)
        },
        [loadProduct, state]
    )

    const onChangeItemRoomId = useCallback(
        (index: number, data: DropdownProps) => {
            if (!state.stockArrival.items) {
                return
            }

            const room = roomsAsOptions.find(p => p.value === (data.value as string))

            const items = [...state.stockArrival.items]

            items[index].roomId = room?.value as string
            items[index].count = 1

            state.setStockArrival({
                ...state.stockArrival,
                items
            })

            setIsConfirmEnabled(true)
        },
        [roomsAsOptions, state]
    )

    const onChangeItemCount = useCallback(
        (index: number, data: InputOnChangeData) => {
            if (!state.stockArrival.items) {
                return
            }

            state.stockArrival.items[index].count = parseFloat(data.value)

            state.setStockArrival({
                ...state.stockArrival
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteItem = useCallback(
        (index: number) => {
            const items = state.stockArrival.items?.filter((_, i) => i !== index) ?? []

            state.setStockArrival({
                ...state.stockArrival,
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
        const productIds = state.stockArrival.items?.map(x => x.productId)

        const products = await loadProducts(productIds)
        setProducts(products ?? [])
    }, [loadProducts, state.stockArrival.items])

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
                        value: state.stockArrival.type,
                        text: getStockArrivalTypeName(state.stockArrival.type),
                        options: getStockArrivalTypesAsSelectOptions(),
                        onChange: onChangeType
                    },
                    {
                        type: 'autocomplete',
                        label: 'Заказ',
                        width: '4',
                        value: state.stockArrival.orderId,
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
                fields: state.stockArrival.items?.map((x, i) => [
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
                checked: state.stockArrival.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.stockArrival.type,
            state.stockArrival.orderId,
            state.stockArrival.items,
            state.stockArrival.isDeleted,
            onChangeType,
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

export default useStockArrivalOnChange
