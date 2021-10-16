import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import TaskTypeContextProvider from './contexts/TaskTypeContext/TaskTypeContextProvider'
import TaskTypeDelete from './components/TaskTypeDelete/TaskTypeDelete'
import TaskTypeRestore from './components/TaskTypeRestore/TaskTypeRestore'
import TaskTypesActionsContextProvider from './contexts/TaskTypesActionsContext/TaskTypesActionsContextProvider'
import TaskTypesContextProvider from './contexts/TaskTypesContext/TaskTypesContextProvider'
import TaskTypesFilter from './components/TaskTypesFilter/TaskTypesFilter'
import TaskTypesFilterMobile from './components/TaskTypesFilterMobile/TaskTypesFilterMobile'
import TaskTypesFiltersContextProvider from './contexts/TaskTypesFiltersContext/TaskTypesFiltersContextProvider'
import TaskTypesTable from './components/TaskTypesTable/TaskTypesTable'
import TasksMenu from '../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskTypes: FC = () => {
    const title = 'Типы'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskTypesContextProvider>
            <TaskTypesActionsContextProvider>
                <TaskTypesFiltersContextProvider>
                    <TaskTypeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<TasksMenu />}
                            secondSidebar={<TaskTypesFilter />}
                            secondSidebarMobile={<TaskTypesFilterMobile />}
                        >
                            <TaskTypesTable />
                            <TaskTypeDelete />
                            <TaskTypeRestore />
                        </Page>
                    </TaskTypeContextProvider>
                </TaskTypesFiltersContextProvider>
            </TaskTypesActionsContextProvider>
        </TaskTypesContextProvider>
    )
}

export default TaskTypes
