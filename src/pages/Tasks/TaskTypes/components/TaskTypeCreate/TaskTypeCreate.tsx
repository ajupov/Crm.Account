import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskTypeContextProvider from '../../contexts/TaskTypeContext/TaskTypeContextProvider'
import TaskTypeCreateForm from './TaskTypeCreateForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskTypeCreate: FC = () => {
    const title = 'Добавление типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskTypeContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskTypeCreateForm />
            </Page>
        </TaskTypeContextProvider>
    )
}

export default TaskTypeCreate
