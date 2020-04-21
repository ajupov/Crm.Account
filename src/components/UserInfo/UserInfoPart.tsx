import React, { FC, useContext } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Loader from '../Loader/Loader'
import Routes from '../Routes/Routes'
import UserInfoContext from './contexts/UserInfoContext'

const UserInfoPart: FC = () => {
    const { isAuthenticated } = useContext(UserInfoContext)

    return isAuthenticated ? (
        <BrowserRouter>
            <Layout>
                <Routes />
            </Layout>
        </BrowserRouter>
    ) : (
        <Loader isLoading />
    )
}

export default UserInfoPart
