import React, { FC, useEffect } from 'react'

import Board from '@lourenci/react-kanban'
import DealsMenu from './DealsMenu/DealsMenu'
import Page from '../../components/common/grids/Page/Page'
import { setPageTitle } from '../../helpers/productNameHelper'

const board = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    title: 'Card title 1',
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    description: 'Card content'
                },
                {
                    id: 2,
                    title: 'Card title 2',
                    description: 'Card content'
                },
                {
                    id: 3,
                    title: 'Card title 3',
                    description: 'Card content'
                }
            ]
        },
        {
            id: 2,
            title: 'Doing',
            cards: [
                {
                    id: 9,
                    title: 'Card title 9',
                    description: 'Card content'
                }
            ]
        },
        {
            id: 3,
            title: 'Q&A',
            cards: [
                {
                    id: 10,
                    title: 'Card title 10',
                    description: 'Card content'
                },
                {
                    id: 11,
                    title: 'Card title 11',
                    description: 'Card content'
                }
            ]
        },
        {
            id: 4,
            title: 'Production',
            cards: [
                {
                    id: 12,
                    title: 'Card title 12',
                    description: 'Card content'
                },
                {
                    id: 13,
                    title: 'Card title 13',
                    description: 'Card content'
                }
            ]
        }
    ]
}

// TODO: Move to l10n
const Deals: FC = () => {
    const title = 'Сделки'

    useEffect(() => setPageTitle(title), [])

    return (
        <Page
            title={title}
            firstSidebar={<DealsMenu />}
            // secondSidebar={<LeadsFilter />}
            // secondSidebarMobile={<LeadsFilterMobile />}
        >
            <Board initialBoard={board} />
        </Page>
    )
}

export default Deals
