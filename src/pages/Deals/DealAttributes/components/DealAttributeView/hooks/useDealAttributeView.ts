import { useCallback, useContext } from 'react'

import OrderAttribute from '../../../../../../../api/orders/models/OrderAttribute'
import OrderAttributesActionsContext from '../../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseOrderAttributeViewReturn {
    map: (attribute: OrderAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useOrderAttributeView = (): UseOrderAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(OrderAttributesActionsContext)

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
        (attribute: OrderAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useOrderAttributeView
