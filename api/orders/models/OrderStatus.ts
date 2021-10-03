export default interface OrderStatus {
    id?: string
    accountId?: string
    name?: string
    isFinish: boolean
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
