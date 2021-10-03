export default interface OrderStatusChange {
    id?: string
    changerUserId?: string
    statusId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
