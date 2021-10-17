import TaskStatusChangesFiltersState, {
    taskStatusChangesFiltersInitialState
} from '../../../states/TaskStatusChangesFiltersState'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FilterFormFieldProps } from '../../../../../../components/common/forms/FilterForm/FilterForm'
import { InputOnChangeData } from 'semantic-ui-react'
import TaskStatusChangesContext from '../../TaskStatusChangesContext/TaskStatusChangesContext'

// TODO: Move to l10n
const useTaskStatusChangesFilters = (): TaskStatusChangesFiltersState => {
    const state = useContext(TaskStatusChangesContext)
    const [minCreateDate, setMinCreateDate] = useState<string>()
    const [maxCreateDate, setMaxCreateDate] = useState<string>()
    const [isApplyEnabled, setIsApplyEnabled] = useState(false)
    const [isResetEnabled, setIsResetEnabled] = useState(false)
    const [isShowMobile, setIsShowMobile] = useState(taskStatusChangesFiltersInitialState.isShowMobile)

    const onChangeMinCreateDate = useCallback((_, data: InputOnChangeData) => {
        setMinCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onChangeMaxCreateDate = useCallback((_, data: InputOnChangeData) => {
        setMaxCreateDate(data.value)
        setIsApplyEnabled(true)
    }, [])

    const onApply = useCallback(() => {
        state.setRequest({
            ...state.request,
            minCreateDate,
            maxCreateDate,
            offset: 0
        })

        setIsShowMobile(false)
        setIsApplyEnabled(false)
        setIsResetEnabled(true)
    }, [maxCreateDate, minCreateDate, state])

    const onReset = useCallback(() => {
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)

        state.setRequest({
            ...state.request,
            minCreateDate: void 0,
            maxCreateDate: void 0,
            offset: 0
        })

        setIsShowMobile(false)
        setIsResetEnabled(false)
    }, [state])

    const onShowMobile = useCallback(() => setIsShowMobile(true), [setIsShowMobile])

    const onHideMobile = useCallback(() => setIsShowMobile(false), [setIsShowMobile])

    const fields: FilterFormFieldProps[] = useMemo(
        () => [
            {
                type: 'date',
                label: 'Дата создания',
                value1: minCreateDate,
                onChange1: onChangeMinCreateDate,
                value2: maxCreateDate,
                onChange2: onChangeMaxCreateDate
            }
        ],
        [maxCreateDate, minCreateDate, onChangeMaxCreateDate, onChangeMinCreateDate]
    )

    return { fields, isApplyEnabled, onApply, isResetEnabled, onReset, isShowMobile, onShowMobile, onHideMobile }
}

export default useTaskStatusChangesFilters
