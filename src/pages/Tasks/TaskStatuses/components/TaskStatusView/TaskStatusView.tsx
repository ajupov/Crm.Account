import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskStatusContextProvider from '../../contexts/TaskStatusContext/TaskStatusContextProvider'
import TaskStatusDelete from '../TaskStatusDelete/TaskStatusDelete'
import TaskStatusRestore from '../TaskStatusRestore/TaskStatusRestore'
import TaskStatusViewForm from './TaskStatusViewForm'
import TaskStatusesActionsContextProvider from '../../contexts/TaskStatusesActionsContext/TaskStatusesActionsContextProvider'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskStatusView: FC = () => {
    const title = 'Просмотр статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusesActionsContextProvider>
            <TaskStatusContextProvider>
                <Page title={title} firstSidebar={<TasksMenu />}>
                    <TaskStatusViewForm />
                    <TaskStatusDelete />
                    <TaskStatusRestore />
                </Page>
            </TaskStatusContextProvider>
        </TaskStatusesActionsContextProvider>
    )
}

export default TaskStatusView
