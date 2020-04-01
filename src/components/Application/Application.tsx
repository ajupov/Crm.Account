import React, { FC, Suspense } from 'react'

import Loader from '../loader/Loader'
import UserInfo from '../UserInfo/UserInfo'

const Application: FC = () => (
    <Suspense fallback={<Loader isLoading />}>
        <UserInfo />
    </Suspense>
)

export default Application
