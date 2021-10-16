import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskTypeContextProvider from '../../contexts/TaskTypeContext/TaskTypeContextProvider'
import TaskTypeDelete from '../TaskTypeDelete/TaskTypeDelete'
import TaskTypeRestore from '../TaskTypeRestore/TaskTypeRestore'
import TaskTypeViewForm from './TaskTypeViewForm'
import TaskTypesActionsContextProvider from '../../contexts/TaskTypesActionsContext/TaskTypesActionsContextProvider'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskTypeView: FC = () => {
    const title = 'Просмотр типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskTypesActionsContextProvider>
            <TaskTypeContextProvider>
                <Page title={title} firstSidebar={<TasksMenu />}>
                    <TaskTypeViewForm />
                    <TaskTypeDelete />
                    <TaskTypeRestore />
                </Page>
            </TaskTypeContextProvider>
        </TaskTypesActionsContextProvider>
    )
}

export default TaskTypeView
