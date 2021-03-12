import UserFlagsState, { userFlagsInitialState } from '../../../states/UserFlagsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import UserFlagType from '../../../../../../../api/user/models/UserFlagType'
import UserFlagsClient from '../../../../../../../api/user/clients/UserFlagsClient'

const userFlagsClient = new UserFlagsClient(HttpClientFactoryInstance.Api)

const useUserFlags = (): UserFlagsState => {
    const [notSetFlags, setNotSetFlags] = useState(userFlagsInitialState.notSetFlags)
    const [currentlySetFlags] = useState(userFlagsInitialState.currentlySetFlags)

    const setFlag = useCallback(
        async (type: UserFlagType) => {
            await userFlagsClient.SetAsync(type)

            currentlySetFlags.push(type)
        },
        [currentlySetFlags]
    )

    const get = useCallback(async () => {
        const notSetFlags = await userFlagsClient.GetNotSetListAsync()

        setNotSetFlags(notSetFlags)
    }, [])

    useEffect(() => {
        void get()
    }, [get])

    return { notSetFlags, currentlySetFlags, setFlag }
}

export default useUserFlags
