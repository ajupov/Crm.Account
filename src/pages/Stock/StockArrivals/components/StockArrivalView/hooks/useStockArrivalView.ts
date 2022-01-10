import { useCallback, useContext, useEffect, useState } from 'react'

import Product from '../../../../../../../api/products/models/Product'
import StockArrival from '../../../../../../../api/stock/models/StockArrival'
import StockArrivalContext from '../../../contexts/StockArrivalContext/StockArrivalContext'
import StockArrivalsActionsContext from '../../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getStockArrivalTypeName } from '../../../helpers/stockArrivalTypeHelper'
import { joinItems } from '../../../mappers/stockArrivalItemsMapper'
import { useHistory } from 'react-router'
import useOrderLoad from '../../../hooks/load/useOrderLoad'
import useProductsLoad from '../../../hooks/load/useProductsLoad'
import useSupplierLoad from '../../../hooks/load/useSupplierLoad'

interface UseStockArrivalViewReturn {
    map: (stockArrival: StockArrival) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockArrivalView = (): UseStockArrivalViewReturn => {
    const history = useHistory()
    const stockArrivalState = useContext(StockArrivalContext)
    const actionsState = useContext(StockArrivalsActionsContext)
    const { supplier } = useSupplierLoad(stockArrivalState.stockArrival.supplierId)
    const { order } = useOrderLoad(stockArrivalState.stockArrival.orderId)
    const { loadProducts } = useProductsLoad()
    const [products, setProducts] = useState<Product[]>([])

    const onClickDelete = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsDeleting(true)
        },
        [actionsState]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsRestoring(true)
        },
        [actionsState]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const loadProductsByIds = useCallback(async () => {
        const productIds = stockArrivalState.stockArrival.items?.map(x => x.productId)

        const products = await loadProducts(productIds)
        setProducts(products ?? [])
    }, [loadProducts, stockArrivalState.stockArrival.items])

    useEffect(() => {
        void loadProductsByIds()
    }, [loadProductsByIds])

    const mapItems = useCallback(
        () => joinItems(products, stockArrivalState.stockArrival.items),
        [products, stockArrivalState.stockArrival.items]
    )

    const map = useCallback(
        (stockArrival: StockArrival): ViewDataProps[] => [
            { label: 'Тип', value: getStockArrivalTypeName(stockArrival.type) },
            { label: 'Поставщик', value: supplier?.name },
            { label: 'Заказ', value: order?.name },
            { label: 'Позиции', value: mapItems() },
            { label: 'Удален', value: stockArrival.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapItems, order, supplier]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useStockArrivalView
