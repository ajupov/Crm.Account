import React, { FC } from 'react'

import { Icon } from 'semantic-ui-react'

interface BackLinkProps {
    onClick: () => void
}

const BackLink: FC<BackLinkProps> = ({ onClick }) => (
    <a style={{ color: 'grey', display: 'block', marginBottom: '30px' }} onClick={onClick}>
        <Icon name="arrow left" />
        Назад
    </a>
)

export default BackLink
