import { useCallback, useEffect, useState } from 'react'

import AuthClient from '../../.generated/litecrm_api/auth/clients/AuthClient'
import Configuration from '../configuration/Configuration'
import Create from '../utils/httpClient/Create'
import UserInfo from '../models/UserInfo'
import UserInfoClient from '../../.generated/litecrm_api/userinfo/clients/UserInfoClient'

const useUserInfo = (): UserInfo => {
    const configuration = new Configuration()
    const httpClientFactory = Create.HttpClientFactory.WithHost(configuration.ApiUrl).Build()

    const authClient = new AuthClient(httpClientFactory)
    const userInfoClient = new UserInfoClient(httpClientFactory)

    const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', roles: [] })

    const loadUserInfo = useCallback(async (): Promise<void> => {
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
