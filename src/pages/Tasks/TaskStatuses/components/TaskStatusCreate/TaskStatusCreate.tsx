import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskStatusContextProvider from '../../contexts/TaskStatusContext/TaskStatusContextProvider'
import TaskStatusCreateForm from './TaskStatusCreateForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskStatusCreate: FC = () => {
    const title = 'Добавление статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskStatusCreateForm />
            </Page>
        </TaskStatusContextProvider>
    )
}

export default TaskStatusCreate
