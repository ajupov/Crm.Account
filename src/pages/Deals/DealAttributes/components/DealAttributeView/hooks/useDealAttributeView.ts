import { useCallback, useContext } from 'react'

import DealAttribute from '../../../../../../../api/deals/models/DealAttribute'
import DealAttributesActionsContext from '../../../contexts/DealAttributesActionsContext/DealAttributesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseDealAttributeViewReturn {
    map: (attribute: DealAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useDealAttributeView = (): UseDealAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(DealAttributesActionsContext)

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
        (attribute: DealAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useDealAttributeView
