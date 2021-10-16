import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskTypeChangesContextProvider from '../../contexts/TaskTypeChangesContext/TaskTypeChangesContextProvider'
import TaskTypeChangesFilter from './components/TaskTypeChangesFilter/TaskTypeChangesFilter'
import TaskTypeChangesFilterMobile from './components/TaskTypeChangesFilterMobile/TaskTypeChangesFilterMobile'
import TaskTypeChangesFiltersContextProvider from '../../contexts/TaskTypeChangesFiltersContext/TaskTypeChangesFiltersContextProvider'
import TaskTypeChangesTable from './components/TaskTypeChangesTable/TaskTypeChangesTable'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useTaskTypeChangesView from './hooks/useTaskTypeChangesView'

// TODO: Move to l10n
const TaskTypeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useTaskTypeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskTypeChangesContextProvider>
            <TaskTypeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<TasksMenu />}
                    secondSidebar={<TaskTypeChangesFilter />}
                    secondSidebarMobile={<TaskTypeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <TaskTypeChangesTable />
                </Page>
            </TaskTypeChangesFiltersContextProvider>
        </TaskTypeChangesContextProvider>
    )
}

export default TaskTypeChanges
