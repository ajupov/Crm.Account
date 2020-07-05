import React, { FC, useCallback, useEffect } from 'react'

import Contacts from './components/Contacts/Contacts'
import { Tab } from 'semantic-ui-react'

const Clients: FC = () => {
    useEffect(() => {
        document.title = 'Клиенты'
    })

    const renderContactsPane = useCallback(
        () => (
            <Tab.Pane attached={false}>
                <Contacts />
            </Tab.Pane>
        ),
        []
    )
    const renderCompaniesPane = useCallback(() => <Tab.Pane attached={false}>Компании</Tab.Pane>, [])

    const panes = [
        {
            menuItem: 'Контакты',
            render: renderContactsPane
        },
        {
            menuItem: 'Компании',
            render: renderCompaniesPane
        }
    ]

    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
}

export default Clients
