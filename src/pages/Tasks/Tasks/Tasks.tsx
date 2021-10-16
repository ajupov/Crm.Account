import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import TaskStatusesContextProvider from './contexts/TaskStatusesContext/TaskStatusesContextProvider'
import TasksBoard from './components/TasksBoard/TasksBoard'
import TasksContextProvider from './contexts/TasksContext/TasksContextProvider'
import TasksMenu from '../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Tasks: FC = () => {
    const title = 'Задачи'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusesContextProvider>
            <TasksContextProvider>
                <h2>Этот раздел в настоящий момент находится в разработке</h2>
                <Page title={title} useFullHeight firstSidebar={<TasksMenu />}>
                    <TasksBoard />
                </Page>
            </TasksContextProvider>
        </TaskStatusesContextProvider>
    )
}

export default Tasks
