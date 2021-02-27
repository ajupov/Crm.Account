import DealsBoardCard, { RenderCardContent } from './components/DealsBoardCard/DealsBoardCard'
import DealsBoardColumn, { RenderColumnTitle } from './components/DealsBoardColumn/DealsBoardColumn'
import React, { FC, useCallback, useContext } from 'react'

import Board from '@lourenci/react-kanban'
import DealStatusesContext from '../../contexts/DealStatusesContext/DealStatusesContext'
import DealsContext from '../../contexts/DealsContext/DealsContext'
import Loader from '../../../../../components/common/other/Loader/Loader'

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
    const dealStatusesState = useContext(DealStatusesContext)
    const dealsState = useContext(DealsContext)

    const onRenderColumn = useCallback(({ title }: RenderColumnTitle) => <DealsBoardColumn title={title} />, [])

    const onRenderCard = useCallback((content: RenderCardContent) => <DealsBoardCard content={content} />, [])

    const onCardDragEnd = useCallback(() => {
        // setBoard(board)
    }, [])

    const renderBoard = useCallback(() => {
        const board = {
            columns: dealStatusesState.statuses.map((x, i) => ({
                id: i,
                title: x.name ?? '',
                cards: dealsState.deals
                    .filter(d => d.statusId === x.id)
                    .map(d => ({
                        id: d.id,
                        title: d.name,
                        date: d.modifyDateTime ?? d.startDateTime
                    }))
            }))
        }

        return (
            <>
                <Loader isLoading={dealStatusesState.isLoading || dealsState.isLoading} />

                <Board renderColumnHeader={onRenderColumn} renderCard={onRenderCard} onCardDragEnd={onCardDragEnd}>
                    {board}
                </Board>
            </>
        )
    }, [
        dealStatusesState.isLoading,
        dealStatusesState.statuses,
        dealsState.deals,
        dealsState.isLoading,
        onCardDragEnd,
        onRenderCard,
        onRenderColumn
    ])

    return <>{renderBoard()}</>
}

export default DealsBoard
