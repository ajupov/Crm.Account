import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskAttributeContextProvider from '../../contexts/TaskAttributeContext/TaskAttributeContextProvider'
import TaskAttributeDelete from '../TaskAttributeDelete/TaskAttributeDelete'
import TaskAttributeRestore from '../TaskAttributeRestore/TaskAttributeRestore'
import TaskAttributeViewForm from './TaskAttributeViewForm'
import TaskAttributesActionsContextProvider from '../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContextProvider'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskAttributesActionsContextProvider>
            <TaskAttributeContextProvider>
                <Page title={title} firstSidebar={<TasksMenu />}>
                    <TaskAttributeViewForm />
                    <TaskAttributeDelete />
                    <TaskAttributeRestore />
                </Page>
            </TaskAttributeContextProvider>
        </TaskAttributesActionsContextProvider>
    )
}

export default TaskAttributeView
