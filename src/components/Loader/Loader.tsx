import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'
import React, { FC } from 'react'

interface LoaderProps {
    isLoading: boolean
}

const Loader: FC<LoaderProps> = ({ isLoading }) => (
    <Dimmer active={isLoading} inverted>
        <SemanticLoader>Загрузка</SemanticLoader>
    </Dimmer>
)

export default Loader
