import { useCallback, useContext } from 'react'

import ContactAttribute from '../../../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributesActionsContext from '../../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContext'
import ContactAttributesRoutes from '../../../routes/ContactAttributesRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseContactAttributeViewReturn {
    map: (attribute: ContactAttribute) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useContactAttributeView = (): UseContactAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(ContactAttributesActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ContactAttributesRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${ContactAttributesRoutes.Changes}/${id}`), [
        history
    ])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const map = useCallback(
        (attribute: ContactAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useContactAttributeView
