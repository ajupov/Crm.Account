export default interface StockBalanceChange {
    id?: string
    changerUserId?: string
    stockBalanceId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
