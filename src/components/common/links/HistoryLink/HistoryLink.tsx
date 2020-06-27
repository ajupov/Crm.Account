import React, { FC, MouseEventHandler } from 'react'

import { Icon } from 'semantic-ui-react'

export interface HistoryLinkProps {
    onClick: MouseEventHandler
}

// TODO: Move to l10n
const HistoryLink: FC<HistoryLinkProps> = ({ onClick }) => (
    <a style={{ color: 'grey', paddingLeft: '30px' }} onClick={onClick}>
        <Icon name="history" /> История изменений
    </a>
)

export default HistoryLink
