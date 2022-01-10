import Product from '../../../../../api/products/models/Product'
import StockArrivalItem from '../../../../../api/stock/models/StockArrivalItem'

const joinItems = (products: Product[], items?: StockArrivalItem[]): string[] =>
    items?.map(x => x.count + 'x — ' + x.room?.name + ' — ' + products.find(p => p.id === x.productId)?.name) ?? []

export { joinItems }
