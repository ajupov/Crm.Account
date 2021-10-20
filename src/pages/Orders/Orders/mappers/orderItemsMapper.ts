import OrderItem from '../../../../../api/orders/models/OrderItem'

const joinItems = (items?: OrderItem[]): string[] =>
    items?.map(x => x.count + 'x — ' + x.productName + ' — ' + x.price + ' руб.') ?? []

export { joinItems }
