import React, { FC } from 'react'

import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export interface HistoryLinkProps {
    link: string
}

// TODO: Move to l10n
const HistoryLink: FC<HistoryLinkProps> = ({ link }) => (
    <Link style={{ color: 'grey', paddingLeft: '30px' }} to={link}>
        <Icon name="history" /> История изменений
    </Link>
)

export default HistoryLink
