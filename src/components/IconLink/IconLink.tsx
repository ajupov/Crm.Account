import { Icon, SemanticICONS } from 'semantic-ui-react'
import React, { FC, MouseEventHandler } from 'react'

interface IconLinkProps {
    name: SemanticICONS
    onClick: MouseEventHandler
}

const IconLink: FC<IconLinkProps> = ({ name, onClick }) => (
    <a style={{ color: 'grey' }} onClick={onClick}>
        <Icon name={name} />
    </a>
)

export default IconLink
