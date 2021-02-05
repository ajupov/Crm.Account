import { useCallback, useContext } from 'react'

import LeadAttribute from '../../../../../../../../api/leads/models/LeadAttribute'
import LeadAttributesActionsContext from '../../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseLeadAttributeViewReturn {
    map: (attribute: LeadAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useLeadAttributeView = (): UseLeadAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(LeadAttributesActionsContext)

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
        (attribute: LeadAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useLeadAttributeView
