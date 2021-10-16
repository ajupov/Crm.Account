import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import TaskAttributeContextProvider from './contexts/TaskAttributeContext/TaskAttributeContextProvider'
import TaskAttributeDelete from './components/TaskAttributeDelete/TaskAttributeDelete'
import TaskAttributeRestore from './components/TaskAttributeRestore/TaskAttributeRestore'
import TaskAttributesActionsContextProvider from './contexts/TaskAttributesActionsContext/TaskAttributesActionsContextProvider'
import TaskAttributesContextProvider from './contexts/TaskAttributesContext/TaskAttributesContextProvider'
import TaskAttributesFilter from './components/TaskAttributesFilter/TaskAttributesFilter'
import TaskAttributesFilterMobile from './components/TaskAttributesFilterMobile/TaskAttributesFilterMobile'
import TaskAttributesFiltersContextProvider from './contexts/TaskAttributesFiltersContext/TaskAttributesFiltersContextProvider'
import TaskAttributesTable from './components/TaskAttributesTable/TaskAttributesTable'
import TasksMenu from '../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const TaskAttributes: FC = () => {
    const title = 'Атрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskAttributesContextProvider>
            <TaskAttributesActionsContextProvider>
                <TaskAttributesFiltersContextProvider>
                    <TaskAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<TasksMenu />}
                            secondSidebar={<TaskAttributesFilter />}
                            secondSidebarMobile={<TaskAttributesFilterMobile />}
                        >
                            <TaskAttributesTable />
                            <TaskAttributeDelete />
                            <TaskAttributeRestore />
                        </Page>
                    </TaskAttributeContextProvider>
                </TaskAttributesFiltersContextProvider>
            </TaskAttributesActionsContextProvider>
        </TaskAttributesContextProvider>
    )
}

export default TaskAttributes
