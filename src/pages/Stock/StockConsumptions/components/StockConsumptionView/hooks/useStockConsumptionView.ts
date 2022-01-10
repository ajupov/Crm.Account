import { useCallback, useContext, useEffect, useState } from 'react'

import Product from '../../../../../../../api/products/models/Product'
import StockConsumption from '../../../../../../../api/stock/models/StockConsumption'
import StockConsumptionContext from '../../../contexts/StockConsumptionContext/StockConsumptionContext'
import StockConsumptionsActionsContext from '../../../contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getStockConsumptionTypeName } from '../../../helpers/stockConsumptionTypeHelper'
import { joinItems } from '../../../mappers/stockConsumptionItemsMapper'
import { useHistory } from 'react-router'
import useOrderLoad from '../../../hooks/load/useOrderLoad'
import useProductsLoad from '../../../hooks/load/useProductsLoad'
import useSupplierLoad from '../../../hooks/load/useSupplierLoad'

interface UseStockConsumptionViewReturn {
    map: (stockConsumption: StockConsumption) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockConsumptionView = (): UseStockConsumptionViewReturn => {
    const history = useHistory()
    const stockConsumptionState = useContext(StockConsumptionContext)
    const actionsState = useContext(StockConsumptionsActionsContext)
    const { supplier } = useSupplierLoad(stockConsumptionState.stockConsumption.supplierId)
    const { order } = useOrderLoad(stockConsumptionState.stockConsumption.orderId)
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
        const productIds = stockConsumptionState.stockConsumption.items?.map(x => x.productId)

        const products = await loadProducts(productIds)
        setProducts(products ?? [])
    }, [loadProducts, stockConsumptionState.stockConsumption.items])

    useEffect(() => {
        void loadProductsByIds()
    }, [loadProductsByIds])

    const mapItems = useCallback(
        () => joinItems(products, stockConsumptionState.stockConsumption.items),
        [products, stockConsumptionState.stockConsumption.items]
    )

    const map = useCallback(
        (stockConsumption: StockConsumption): ViewDataProps[] => [
            { label: 'Тип', value: getStockConsumptionTypeName(stockConsumption.type) },
            { label: 'Поставщик', value: supplier?.name },
            { label: 'Заказ', value: order?.name },
            { label: 'Позиции', value: mapItems() },
            { label: 'Удален', value: stockConsumption.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapItems, order, supplier]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useStockConsumptionView
