import Product from '../../../../../api/products/models/Product'
import StockConsumptionItem from '../../../../../api/stock/models/StockConsumptionItem'

const joinItems = (products: Product[], items?: StockConsumptionItem[]): string[] =>
    items?.map(x => x.count + 'x — ' + x.room?.name + ' — ' + products.find(p => p.id === x.productId)?.name) ?? []

export { joinItems }
