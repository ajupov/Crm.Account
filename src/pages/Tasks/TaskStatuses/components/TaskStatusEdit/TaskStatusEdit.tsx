import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskStatusContextProvider from '../../contexts/TaskStatusContext/TaskStatusContextProvider'
import TaskStatusEditForm from './TaskStatusEditForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskStatusEdit: FC = () => {
    const title = 'Изменение статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskStatusEditForm />
            </Page>
        </TaskStatusContextProvider>
    )
}

export default TaskStatusEdit
