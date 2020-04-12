import React, { FC } from 'react'

import { FallbackProps } from 'react-error-boundary'

const ErrorBoundaryFallbackComponent: FC<FallbackProps> = (): JSX.Element => (
    <div style={{ textAlign: 'center' }}>
        <h1>Произошла ошибка</h1>
        <h3>Попробуйте обновить страницу очистив кеш и куки.</h3>
    </div>
)

export default ErrorBoundaryFallbackComponent
