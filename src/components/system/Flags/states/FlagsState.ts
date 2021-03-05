import AccountFlagType from '../../../../../api/flags/models/AccountFlagType'
import UserFlagType from '../../../../../api/flags/models/UserFlagType'

export default interface FlagsState {
    notSetAccountFlags: AccountFlagType[]
    notSetUserFlags: UserFlagType[]
}

export const flagsInitialState: FlagsState = {
    notSetAccountFlags: [],
    notSetUserFlags: []
}
