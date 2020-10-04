import { useCallback, useContext } from 'react'

import ContactAttribute from '../../../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributesActionsContext from '../../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseContactAttributeViewReturn {
    map: (attribute: ContactAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useContactAttributeView = (): UseContactAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(ContactAttributesActionsContext)

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
        (attribute: ContactAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useContactAttributeView
