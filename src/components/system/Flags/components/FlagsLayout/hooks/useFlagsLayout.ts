import { useCallback, useContext, useMemo, useState } from 'react'

import AccountFlagType from '../../../../../../../api/account/models/AccountFlagType'
import AccountFlagsContext from '../../../contexts/AccountFlagsContext/AccountFlagsContext'
import { FlagStep } from '../../FlagSteps/FlagSteps'
import UserFlagType from '../../../../../../../api/user/models/UserFlagType'
import UserFlagsContext from '../../../contexts/UserFlagsContext/UserFlagsContext'

interface UseFlagsLayoutReturn {
    isShowModal: boolean
    isSetFlag: (step: FlagStep) => boolean
    activeIndex: number
}

const useFlagsLayout = (): UseFlagsLayoutReturn => {
    const accountFlagsState = useContext(AccountFlagsContext)
    const userFlagsState = useContext(UserFlagsContext)

    const isShowModal = useMemo(
        () => Boolean(accountFlagsState.notSetFlags.length || userFlagsState.notSetFlags.length),
        [accountFlagsState.notSetFlags.length, userFlagsState.notSetFlags.length]
    )

    const isSetFlag = useCallback(
        (step: FlagStep) => {
            switch (step.type) {
                case 'account':
                    return !accountFlagsState.notSetFlags.includes(step.flag as AccountFlagType)
                case 'user':
                    return !userFlagsState.notSetFlags.includes(step.flag as UserFlagType)
                default:
                    return false
            }
        },
        [accountFlagsState.notSetFlags, userFlagsState.notSetFlags]
    )

    const [activeIndex] = useState(0)

    return { isShowModal, isSetFlag, activeIndex }
}

export default useFlagsLayout
