import { useCallback, useContext } from 'react'

import LeadSource from '../../../../../../../../api/leads/models/LeadSource'
import LeadSourcesActionsContext from '../../../contexts/LeadSourcesActionsContext/LeadSourcesActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { useHistory } from 'react-router'

interface UseLeadSourceViewReturn {
    map: (source: LeadSource) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useLeadSourceView = (): UseLeadSourceViewReturn => {
    const history = useHistory()
    const state = useContext(LeadSourcesActionsContext)

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
        (source: LeadSource): ViewDataProps[] => [
            { label: 'Наименование', value: source.name },
            { label: 'Удален', value: source.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useLeadSourceView
