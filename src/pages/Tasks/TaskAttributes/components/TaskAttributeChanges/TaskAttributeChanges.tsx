import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import TaskAttributeChangesContextProvider from '../../contexts/TaskAttributeChangesContext/TaskAttributeChangesContextProvider'
import TaskAttributeChangesFilter from './components/TaskAttributeChangesFilter/TaskAttributeChangesFilter'
import TaskAttributeChangesFiltersContextProvider from '../../contexts/TaskAttributeChangesFiltersContext/TaskAttributeChangesFiltersContextProvider'
import TaskAttributeChangesTable from './components/TaskAttributeChangesTable/TaskAttributeChangesTable'
import TasksAttributeChangesFilterMobile from './components/TasksAttributeChangesFilterMobile/TasksAttributeChangesFilterMobile'
import TasksMenu from '../../../TasksMenu/TasksMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useTaskAttributeChangesView from './hooks/useTaskAttributeChangesView'

// TODO: Move to l10n
const TaskAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useTaskAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <TaskAttributeChangesContextProvider>
            <TaskAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<TasksMenu />}
                    secondSidebar={<TaskAttributeChangesFilter />}
                    secondSidebarMobile={<TasksAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <TaskAttributeChangesTable />
                </Page>
            </TaskAttributeChangesFiltersContextProvider>
        </TaskAttributeChangesContextProvider>
    )
}

export default TaskAttributeChanges
