export default interface TaskChange {
    id?: string
    changerUserId?: string
    taskId?: string
    createDateTime?: string
    oldValueJson?: string
    newValueJson?: string
}
