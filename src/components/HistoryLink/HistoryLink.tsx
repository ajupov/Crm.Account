import React, { FC, MouseEventHandler } from 'react'

import { Icon } from 'semantic-ui-react'

interface HistoryLinkProps {
    onClick: MouseEventHandler
}

const HistoryLink: FC<HistoryLinkProps> = ({ onClick }) => (
    <a style={{ color: 'grey', paddingLeft: '30px' }} onClick={onClick}>
        <Icon name="history" /> История изменений
    </a>
)

export default HistoryLink
