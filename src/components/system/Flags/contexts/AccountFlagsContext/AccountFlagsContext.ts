import AccountFlagsState, { accountFlagsInitialState } from '../../states/AccountFlagsState'

import { createContext } from 'react'

const AccountFlagsContext = createContext<AccountFlagsState>(accountFlagsInitialState)

export default AccountFlagsContext
