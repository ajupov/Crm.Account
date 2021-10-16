import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskAttributeContextProvider from '../../contexts/TaskAttributeContext/TaskAttributeContextProvider'
import TaskAttributeCreateForm from './TaskAttributeCreateForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskAttributeContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskAttributeCreateForm />
            </Page>
        </TaskAttributeContextProvider>
    )
}

export default TaskAttributeCreate
