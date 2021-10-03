export default interface OrderChange {
    id?: string
    changerUserId?: string
    orderId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
