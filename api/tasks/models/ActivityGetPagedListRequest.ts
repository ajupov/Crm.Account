import ActivityPriority from './ActivityPriority'
import { Dictionary } from '../../../src/utils/dictionary/dictionaryUtils'

export default interface ActivityGetPagedListRequest {
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
    companyIds?: string[]
    contactIds?: string[]
    dealIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    priorities?: ActivityPriority[]
    allAttributes?: boolean
    attributes?: Dictionary<string>
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
