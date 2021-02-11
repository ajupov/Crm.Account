import DealsBoardCard, { RenderCardContent } from './components/DealsBoardCard/DealsBoardCard'
import DealsBoardColumn, { RenderColumnTitle } from './components/DealsBoardColumn/DealsBoardColumn'
import React, { FC, useCallback, useContext } from 'react'

import Board from '@lourenci/react-kanban'
import DealStatusesContext from '../../contexts/DealStatusesContext/DealStatusesContext'

export type BoardCardProps = {
    id: number
    title: string
    description: string
}

export type BoardColumnProps = {
    id: number
    title: string
    cards: BoardCardProps[]
}

export type BoardProps = {
    columns: BoardColumnProps[]
}

const DealsBoard: FC = () => {
    const state = useContext(DealStatusesContext)

    const board: BoardProps = {
        columns: state.statuses.map((x, i) => ({
            id: i,
            title: x.name ?? '',
            cards: [
                {
                    id: i,
                    title: 'Произвольное название',
                    description: 'Длинное произвольное описание карточки'
                }
            ]
        }))
    }

    const onRenderColumn = useCallback(({ title }: RenderColumnTitle) => <DealsBoardColumn title={title} />, [])

    const onRenderCard = useCallback((content: RenderCardContent) => <DealsBoardCard content={content} />, [])

    return (
        <Board renderColumnHeader={onRenderColumn} renderCard={onRenderCard}>
            {board}
        </Board>
    )
}

export default DealsBoard
