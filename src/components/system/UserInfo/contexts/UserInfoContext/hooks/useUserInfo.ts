import UserInfoState, { userInfoInitialState } from '../../../states/UserInfoState'
import { useCallback, useEffect, useState } from 'react'

import AuthClient from '../../../../../../../api/auth/clients/AuthClient'
import Configuration from '../../../../../../configuration/Configuration'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import UserInfoClient from '../../../../../../../api/auth/clients/UserInfoClient'

const authClient = new AuthClient(HttpClientFactory.Host, HttpClientFactory.Api)
const userInfoClient = new UserInfoClient(HttpClientFactory.Host, HttpClientFactory.Api)
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
