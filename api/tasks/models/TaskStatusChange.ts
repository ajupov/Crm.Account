export default interface TaskStatusChange {
    id?: string
    changerUserId?: string
    statusId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
