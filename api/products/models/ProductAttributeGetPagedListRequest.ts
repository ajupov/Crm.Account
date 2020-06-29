import ProductAttributeType from './ProductAttributeType'

export default interface ProductAttributeGetPagedListRequest {
    types?: ProductAttributeType[]
    key?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
