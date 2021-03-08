import AccountFlagType from '../../../../../api/flags/models/AccountFlagType'

export default interface AccountFlagsState {
    notSetFlags: AccountFlagType[]
    currentlySetFlags: AccountFlagType[]
    setFlag: (type: AccountFlagType) => void
}

export const accountFlagsInitialState: AccountFlagsState = {
    notSetFlags: [],
    currentlySetFlags: [],
    setFlag: () => void 0
}
