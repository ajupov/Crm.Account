import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskAttributeContextProvider from '../../contexts/TaskAttributeContext/TaskAttributeContextProvider'
import TaskAttributeEditForm from './TaskAttributeEditForm'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskAttributeContextProvider>
            <Page title={title} firstSidebar={<TasksMenu />}>
                <TaskAttributeEditForm />
            </Page>
        </TaskAttributeContextProvider>
    )
}

export default TaskAttributeEdit
