import UserFlagType from '../../../../../api/user/models/UserFlagType'

export default interface UserFlagsState {
    notSetFlags: UserFlagType[]
    currentlySetFlags: UserFlagType[]
    setFlag: (type: UserFlagType) => void
}

export const userFlagsInitialState: UserFlagsState = {
    notSetFlags: [],
    currentlySetFlags: [],
    setFlag: () => void 0
}
