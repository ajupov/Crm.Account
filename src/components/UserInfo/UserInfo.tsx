import React, { FC } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Loader from '../Loader/Loader'
import Routes from '../Routes/Routes'
import UserInfoContext from './contexts/UserInfoContext'
import useUserInfo from './hooks/useUserInfo'

const UserInfo: FC = () => {
    const userInfo = useUserInfo()

    return userInfo.isAuthenticated ? (
        <UserInfoContext.Provider value={userInfo}>
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </UserInfoContext.Provider>
    ) : (
        <Loader isLoading />
    )
}

export default UserInfo
