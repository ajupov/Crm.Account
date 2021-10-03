export default interface OrderItem {
    id?: string
    orderId?: string
    productId?: string
    productName?: string
    productVendorCode?: string
    price: number
    count: number
}
