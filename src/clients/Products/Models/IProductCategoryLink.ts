import { Guid } from '../../../common/types/Guid'

export interface IProductCategoryLink {
    id: Guid
    productId: Guid
    poductCategoryId: Guid
    createDateTime: Date
    modifyDateTime: Date
}
