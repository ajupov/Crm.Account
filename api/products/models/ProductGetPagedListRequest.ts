import ProductType from '../models/ProductType'

export default interface ProductGetPagedListRequest {
    parentProductId?: string
    types?: ProductType[]
    statusIds?: string[]
    name?: string
    vendorCode?: string
    minPrice?: number
    maxPrice?: number
    isHidden?: boolean
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    allCategoryIds?: boolean
    categoryIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
