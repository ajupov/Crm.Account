export default interface AccountSettingChangeGetPagedListRequest {
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
