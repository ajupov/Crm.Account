/* eslint-disable @typescript-eslint/no-unused-vars */

import OrdersBoardCard, { RenderCardContent } from './components/OrdersBoardCard/OrdersBoardCard'
import OrdersBoardColumn, { RenderColumnTitle } from './components/OrdersBoardColumn/OrdersBoardColumn'
import React, { FC, useCallback, useContext } from 'react'

import Board from '@lourenci/react-kanban'
import Loader from '../../../../../components/common/other/Loader/Loader'
import OrderStatusesContext from '../../contexts/OrderStatusesContext/OrderStatusesContext'
import OrdersContext from '../../contexts/OrdersContext/OrdersContext'

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

const OrdersBoard: FC = () => {
    const orderStatusesState = useContext(OrderStatusesContext)
    const ordersState = useContext(OrdersContext)

    const onRenderColumn = useCallback(({ title }: RenderColumnTitle) => <OrdersBoardColumn title={title} />, [])

    const onRenderCard = useCallback((content: RenderCardContent) => <OrdersBoardCard content={content} />, [])

    const onCardDragEnd = useCallback((card: any, source: any, destination: any) => {
        global.console.log(card)
        global.console.log(source)
        global.console.log(destination)
    }, [])

    const renderBoard = useCallback(() => {
        const board = {
            columns: orderStatusesState.statuses.map(x => ({
                id: x.id,
                title: x.name ?? '',
                cards: ordersState.orders
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
                <Loader isLoading={orderStatusesState.isLoading || ordersState.isLoading} />

                <Board renderColumnHeader={onRenderColumn} renderCard={onRenderCard} onCardDragEnd={onCardDragEnd}>
                    {board}
                </Board>
            </>
        )
    }, [
        orderStatusesState.isLoading,
        orderStatusesState.statuses,
        ordersState.orders,
        ordersState.isLoading,
        onCardDragEnd,
        onRenderCard,
        onRenderColumn
    ])

    return <>{renderBoard()}</>
}

export default OrdersBoard
