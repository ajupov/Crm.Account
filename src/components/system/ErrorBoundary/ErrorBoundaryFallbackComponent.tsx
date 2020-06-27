import React, { FC } from 'react'

import { FallbackProps } from 'react-error-boundary'

const ErrorBoundaryFallbackComponent: FC<FallbackProps> = (): JSX.Element => (
    <div style={{ textAlign: 'center' }}>
        <h1>An error has occurred</h1>
        <h3>Try refreshing the page by clearing your cache and cookies</h3>
    </div>
)

export default ErrorBoundaryFallbackComponent
