import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskStatusChangesContextProvider from '../../contexts/TaskStatusChangesContext/TaskStatusChangesContextProvider'
import TaskStatusChangesFilter from './components/TaskStatusChangesFilter/TaskStatusChangesFilter'
import TaskStatusChangesFiltersContextProvider from '../../contexts/TaskStatusChangesFiltersContext/TaskStatusChangesFiltersContextProvider'
import TaskStatusChangesTable from './components/TaskStatusChangesTable/TaskStatusChangesTable'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import TasksStatusChangesFilterMobile from './components/TasksStatusChangesFilterMobile/TasksStatusChangesFilterMobile'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useTaskStatusChangesView from './hooks/useTaskStatusChangesView'

// TODO: Move to l10n
const TaskStatusChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useTaskStatusChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusChangesContextProvider>
            <TaskStatusChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<TasksMenu />}
                    secondSidebar={<TaskStatusChangesFilter />}
                    secondSidebarMobile={<TasksStatusChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <TaskStatusChangesTable />
                </Page>
            </TaskStatusChangesFiltersContextProvider>
        </TaskStatusChangesContextProvider>
    )
}

export default TaskStatusChanges
