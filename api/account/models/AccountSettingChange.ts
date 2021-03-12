export default interface AccountSettingChange {
    id?: string
    changerUserId?: string
    accountId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
