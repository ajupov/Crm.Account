import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface LoaderProps {
    isLoading: boolean
}

// TODO: Move to l10n
const Loader: FC<LoaderProps> = ({ isLoading }) => (
    <Dimmer active={isLoading} inverted>
        <SemanticLoader>Загрузка</SemanticLoader>
    </Dimmer>
)

export default Loader
