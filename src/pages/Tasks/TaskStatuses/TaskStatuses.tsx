import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import TaskStatusContextProvider from './contexts/TaskStatusContext/TaskStatusContextProvider'
import TaskStatusDelete from './components/TaskStatusDelete/TaskStatusDelete'
import TaskStatusRestore from './components/TaskStatusRestore/TaskStatusRestore'
import TaskStatusesActionsContextProvider from './contexts/TaskStatusesActionsContext/TaskStatusesActionsContextProvider'
import TaskStatusesContextProvider from './contexts/TaskStatusesContext/TaskStatusesContextProvider'
import TaskStatusesFilter from './components/TaskStatusesFilter/TaskStatusesFilter'
import TaskStatusesFilterMobile from './components/TaskStatusesFilterMobile/TaskStatusesFilterMobile'
import TaskStatusesFiltersContextProvider from './contexts/TaskStatusesFiltersContext/TaskStatusesFiltersContextProvider'
import TaskStatusesTable from './components/TaskStatusesTable/TaskStatusesTable'
import TasksMenu from '../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskStatuses: FC = () => {
    const title = 'Статусы'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskStatusesContextProvider>
            <TaskStatusesActionsContextProvider>
                <TaskStatusesFiltersContextProvider>
                    <TaskStatusContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<TasksMenu />}
                            secondSidebar={<TaskStatusesFilter />}
                            secondSidebarMobile={<TaskStatusesFilterMobile />}
                        >
                            <TaskStatusesTable />
                            <TaskStatusDelete />
                            <TaskStatusRestore />
                        </Page>
                    </TaskStatusContextProvider>
                </TaskStatusesFiltersContextProvider>
            </TaskStatusesActionsContextProvider>
        </TaskStatusesContextProvider>
    )
}

export default TaskStatuses
