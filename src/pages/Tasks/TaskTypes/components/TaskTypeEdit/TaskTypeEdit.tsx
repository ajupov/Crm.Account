import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskTypeContextProvider from '../../contexts/TaskTypeContext/TaskTypeContextProvider'
import TaskTypeEditForm from './TaskTypeEditForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskTypeEdit: FC = () => {
    const title = 'Изменение типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskTypeContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskTypeEditForm />
            </Page>
        </TaskTypeContextProvider>
    )
}

export default TaskTypeEdit
