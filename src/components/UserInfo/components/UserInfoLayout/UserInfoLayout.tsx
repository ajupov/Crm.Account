import React, { FC, useContext } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Layout from '../../../Layout/Layout'
import Loader from '../../../Loader/Loader'
import Routes from '../../../Routes/Routes'
import UserInfoContext from '../../contexts/UserInfoContext/UserInfoContext'

const UserInfoLayout: FC = () => {
    const state = useContext(UserInfoContext)

    return state.isAuthenticated ? (
        <BrowserRouter>
            <Layout>
                <Routes />
            </Layout>
        </BrowserRouter>
    ) : (
        <Loader isLoading />
    )
}

export default UserInfoLayout
