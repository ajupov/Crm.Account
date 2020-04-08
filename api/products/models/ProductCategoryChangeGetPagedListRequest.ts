/* eslint-disable */
export default interface ProductCategoryChangeGetPagedListRequest {
    categoryId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
