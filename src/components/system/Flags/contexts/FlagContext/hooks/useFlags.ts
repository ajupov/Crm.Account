import FlagsState, { flagsInitialState } from '../../../states/FlagsState'
import { useCallback, useEffect, useState } from 'react'

import AccountFlagsClient from '../../../../../../../api/flags/clients/AccountFlagsClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import UserFlagsClient from '../../../../../../../api/flags/clients/UserFlagsClient'

const accountFlagsClient = new AccountFlagsClient(HttpClientFactoryInstance.Api)
const userFlagsClient = new UserFlagsClient(HttpClientFactoryInstance.Api)

const useFlags = (): FlagsState => {
    const [flagsState, setFlagsState] = useState(flagsInitialState)

    const get = useCallback(async () => {
        const notSetAccountFlags = await accountFlagsClient.GetNotSetListAsync()
        const notSetUserFlags = await userFlagsClient.GetNotSetListAsync()

        setFlagsState({
            notSetAccountFlags,
            notSetUserFlags
        })
    }, [])

    useEffect(() => {
        void get()
    }, [get])

    return flagsState
}

export default useFlags
