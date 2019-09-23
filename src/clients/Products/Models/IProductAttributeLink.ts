import { Guid } from '../../../common/types/Guid'

export interface IProductAttributeLink {
    id: Guid
    productId: Guid
    productAttributeId: Guid
    value: string
    createDateTime: Date
    modifyDateTime: Date
}
