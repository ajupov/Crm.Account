import UserInfoState, { userInfoInitialState } from '../../../states/UserInfoState'
import { useCallback, useEffect, useState } from 'react'

import AuthClient from '../../../../../../../api/auth/clients/AuthClient'
import Configuration from '../../../../../../configuration/Configuration'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import UserInfoClient from '../../../../../../../api/userinfo/clients/UserInfoClient'

const authClient = new AuthClient(HttpClientFactoryInstance.Api)
const userInfoClient = new UserInfoClient(HttpClientFactoryInstance.Api)
const configuration = new Configuration()

const useUserInfo = (): UserInfoState => {
    const [userInfo, setUserInfo] = useState(userInfoInitialState)

    const get = useCallback(async () => {
        const isAuthenticated = await authClient.IsAuthenticatedAsync()
        if (!isAuthenticated) {
            window.location.href = configuration.LoginUrl + '?redirectUri=' + window.location.href
        }

        const userInfo = await userInfoClient.GetAsync()

        setUserInfo({
            isAuthenticated: true,
            name: userInfo.name ?? '',
            roles: userInfo.roles ?? []
        })
    }, [])

    useEffect(() => {
        void get()
    }, [get])

    return userInfo
}

export default useUserInfo
