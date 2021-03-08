import UserSettingChange from './UserSettingChange'

export default interface UserSettingChangeGetPagedListResponse {
    totalCount: number
    changes?: UserSettingChange[]
}
