import { Guid } from '../../../common/types/Guid'

export interface IProductStatus {
    id: Guid
    name: string
    isDeleted: boolean
    createDateTime: Date
    modifyDateTime: Date
}
