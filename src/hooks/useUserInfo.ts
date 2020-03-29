import { useCallback, useEffect, useState } from 'react'

import AuthClient from '../../api/auth/clients/AuthClient'
import Configuration from '../configuration/Configuration'
import HttpClientFactoryInstance from '../utils/httpClientFactory/HttpClientFactoryInstance'
import UserInfo from '../models/UserInfo'
import UserInfoClient from '../../api/userinfo/clients/UserInfoClient'

const useUserInfo = (): UserInfo => {
    const configuration = new Configuration()
    const httpClientFactory = HttpClientFactoryInstance.Api

    const authClient = new AuthClient(httpClientFactory)
    const userInfoClient = new UserInfoClient(httpClientFactory)

    const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', roles: [] })

    const loadUserInfo = useCallback(async () => {
        const isAuthenticated = await authClient.IsAuthenticatedAsync()
        if (!isAuthenticated) {
            window.location.href = configuration.LoginUrl
        }

        const userInfo = await userInfoClient.GetAsync()

        setUserInfo({ name: userInfo.name ?? '', roles: userInfo.roles ?? [] })
    }, [authClient, userInfoClient, configuration.LoginUrl])

    useEffect(() => {
        loadUserInfo()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return userInfo
}

export default useUserInfo
