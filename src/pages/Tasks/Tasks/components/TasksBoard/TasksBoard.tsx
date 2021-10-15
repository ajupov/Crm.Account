/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC, useCallback, useContext } from 'react'
import TasksBoardCard, { RenderCardContent } from './components/TasksBoardCard/TasksBoardCard'
import TasksBoardColumn, { RenderColumnTitle } from './components/TasksBoardColumn/TasksBoardColumn'

import Board from '@lourenci/react-kanban'
import Loader from '../../../../../components/common/other/Loader/Loader'
import TaskStatusesContext from '../../contexts/TaskStatusesContext/TaskStatusesContext'
import TasksContext from '../../contexts/TasksContext/TasksContext'

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

const TasksBoard: FC = () => {
    const taskStatusesState = useContext(TaskStatusesContext)
    const tasksState = useContext(TasksContext)

    const onRenderColumn = useCallback(({ title }: RenderColumnTitle) => <TasksBoardColumn title={title} />, [])

    const onRenderCard = useCallback((content: RenderCardContent) => <TasksBoardCard content={content} />, [])

    const onCardDragEnd = useCallback((card: any, source: any, destination: any) => {
        global.console.log(card)
        global.console.log(source)
        global.console.log(destination)
    }, [])

    const renderBoard = useCallback(() => {
        const board = {
            columns: taskStatusesState.statuses.map(x => ({
                id: x.id,
                title: x.name ?? '',
                cards: tasksState.tasks
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
                <Loader isLoading={taskStatusesState.isLoading || tasksState.isLoading} />

                <Board renderColumnHeader={onRenderColumn} renderCard={onRenderCard} onCardDragEnd={onCardDragEnd}>
                    {board}
                </Board>
            </>
        )
    }, [
        taskStatusesState.isLoading,
        taskStatusesState.statuses,
        tasksState.tasks,
        tasksState.isLoading,
        onCardDragEnd,
        onRenderCard,
        onRenderColumn
    ])

    return <>{renderBoard()}</>
}

export default TasksBoard
