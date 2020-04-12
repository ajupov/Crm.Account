import React, { FC } from 'react'

import ErrorBoundary from 'react-error-boundary'
import ErrorBoundaryFallbackComponent from './ErrorBoundaryFallbackComponent'

const ErrorBoundaryWithConsoleLogger: FC = ({ children }) => {
    const onError = (error: Error, componentStack: string): void => {
        global.console.error(`${error?.toString()}. Stack trace: ${componentStack}`)
    }

    return (
        <ErrorBoundary onError={onError} FallbackComponent={ErrorBoundaryFallbackComponent}>
            {children}
        </ErrorBoundary>
    )
}

export default ErrorBoundaryWithConsoleLogger
