import React, { FC } from 'react'

import { Icon } from 'semantic-ui-react'

export interface BackLinkProps {
    onClick: () => void
}

// TODO: Move to l10n
const BackLink: FC<BackLinkProps> = ({ onClick }) => (
    <a style={{ color: 'grey', lineHeight: '3rem' }} onClick={onClick}>
        <Icon name="arrow left" /> Назад
    </a>
)

export default BackLink
