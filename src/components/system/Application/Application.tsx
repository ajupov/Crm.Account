import React, { FC, Suspense } from 'react'

import ErrorBoundaryWithConsoleLogger from '../ErrorBoundary/ErrorBoundaryWithConsoleLogger'
import Loader from '../../common/other/Loader/Loader'
import UserInfo from '../UserInfo/UserInfo'

const Application: FC = () => (
    <ErrorBoundaryWithConsoleLogger>
        <Suspense fallback={<Loader isLoading />}>
            <UserInfo />
        </Suspense>
    </ErrorBoundaryWithConsoleLogger>
)

export default Application
