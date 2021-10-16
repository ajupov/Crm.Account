import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import TaskTypeChangesFiltersContext from '../../../../contexts/TaskTypeChangesFiltersContext/TaskTypeChangesFiltersContext'

const TasksTypeChangesFilterMobile: FC = () => {
    const state = useContext(TaskTypeChangesFiltersContext)

    return (
        <FilterMobileModal
            isShow={state.isShowMobile}
            onShow={state.onShowMobile}
            onHide={state.onHideMobile}
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default TasksTypeChangesFilterMobile
