import AccountFlagsState, { accountFlagsInitialState } from '../../../states/AccountFlagsState'
import { useCallback, useEffect, useState } from 'react'

import AccountFlagType from '../../../../../../../api/account/models/AccountFlagType'
import AccountFlagsClient from '../../../../../../../api/account/clients/AccountFlagsClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const accountFlagsClient = new AccountFlagsClient(HttpClientFactory.Api)

const useAccountFlags = (): AccountFlagsState => {
    const [notSetFlags, setNotSetFlags] = useState(accountFlagsInitialState.notSetFlags)
    const [currentlySetFlags] = useState(accountFlagsInitialState.currentlySetFlags)

    const setFlag = useCallback(
        async (type: AccountFlagType) => {
            await accountFlagsClient.SetAsync(type)

            currentlySetFlags.push(type)
        },
        [currentlySetFlags]
    )

    const get = useCallback(async () => {
        const notSetFlags = await accountFlagsClient.GetNotSetListAsync()

        setNotSetFlags(notSetFlags)
    }, [])

    useEffect(() => {
        void get()
    }, [get])

    return { notSetFlags, currentlySetFlags, setFlag }
}

export default useAccountFlags
