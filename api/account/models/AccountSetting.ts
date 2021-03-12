import AccountSettingActivityIndustry from './AccountSettingActivityIndustry'

export default interface AccountSetting {
    id?: string
    accountId?: string
    activityIndustry: AccountSettingActivityIndustry
    createDateTime: string
    modifyDateTime?: string
}
