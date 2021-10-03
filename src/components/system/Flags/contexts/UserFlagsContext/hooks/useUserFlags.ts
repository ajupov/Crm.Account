import UserFlagsState, { userFlagsInitialState } from '../../../states/UserFlagsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import UserFlagType from '../../../../../../../api/user/models/UserFlagType'
import UserFlagsClient from '../../../../../../../api/user/clients/UserFlagsClient'

const userFlagsClient = new UserFlagsClient(HttpClientFactory.Host, HttpClientFactory.Api)

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
