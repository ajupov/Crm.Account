import { useCallback, useContext } from 'react'

import CustomerAttribute from '../../../../../../../api/customers/models/CustomerAttribute'
import CustomerAttributesActionsContext from '../../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseCustomerAttributeViewReturn {
    map: (attribute: CustomerAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerAttributeView = (): UseCustomerAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(CustomerAttributesActionsContext)

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
        (attribute: CustomerAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCustomerAttributeView
