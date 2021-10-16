import { useCallback, useContext } from 'react'

import TaskAttribute from '../../../../../../../api/tasks/models/TaskAttribute'
import TaskAttributesActionsContext from '../../../contexts/TaskAttributesActionsContext/TaskAttributesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseTaskAttributeViewReturn {
    map: (attribute: TaskAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useTaskAttributeView = (): UseTaskAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(TaskAttributesActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (attribute: TaskAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useTaskAttributeView
