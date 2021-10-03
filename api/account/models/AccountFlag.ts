import AccountFlagType from './AccountFlagType'

export default interface AccountFlag {
    id?: string
    accountId?: string
    type: AccountFlagType
    setDateTime: string
}
