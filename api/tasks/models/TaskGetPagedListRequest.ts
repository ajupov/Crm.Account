import TaskPriority from './TaskPriority'

export default interface TaskGetPagedListRequest {
    name?: string
    description?: string
    result?: string
    minStartDateTime?: string
    maxStartDateTime?: string
    minEndDateTime?: string
    maxEndDateTime?: string
    minDeadLineDateTime?: string
    maxDeadLineDateTime?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    typeIds?: string[]
    statusIds?: string[]
    customerIds?: string[]
    orderIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    priorities?: TaskPriority[]
    allAttributes?: boolean
    attributes?: { [key in string]: string }
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
