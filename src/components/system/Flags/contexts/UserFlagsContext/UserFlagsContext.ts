import UserFlagsState, { userFlagsInitialState } from '../../states/UserFlagsState'

import { createContext } from 'react'

const UserFlagsContext = createContext<UserFlagsState>(userFlagsInitialState)

export default UserFlagsContext
