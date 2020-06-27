import { Icon, Message } from 'semantic-ui-react'
import React, { FC } from 'react'

import { Offline } from 'react-detect-offline'

// TODO: Move to l10n
const OfflineStatus: FC = () => (
    <div style={{ position: 'fixed', zIndex: 999, left: 'calc(50% - 144px)' }}>
        <Offline>
            <Message error size="mini" icon>
                <Icon name="exclamation triangle" />
                <Message.Content>
                    <Message.Header>Оффлайн</Message.Header>
                    Отсутствует соединение с Интернетом
                </Message.Content>
            </Message>
        </Offline>
    </div>
)

export default OfflineStatus
