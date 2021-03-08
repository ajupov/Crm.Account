import AccountSettingChange from '../models/AccountSettingChange'

export default interface AccountSettingChangeGetPagedListResponse {
    totalCount: number
    changes?: AccountSettingChange[]
}
