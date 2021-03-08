export default interface UserSettingChange {
    id?: string
    changerUserId?: string
    userId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
