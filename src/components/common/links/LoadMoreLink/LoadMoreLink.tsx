import React, { FC } from 'react'

import { Icon } from 'semantic-ui-react'

export interface LoadMoreLinkProps {
    onClick: () => void
}

// TODO: Move to l10n
const LoadMoreLink: FC<LoadMoreLinkProps> = ({ onClick }) => (
    <a
        style={{ color: 'grey', lineHeight: '2rem', width: '150px', margin: 'auto', display: 'block' }}
        onClick={onClick}
    >
        <Icon name="arrow up" /> Загрузить еще
    </a>
)

export default LoadMoreLink
