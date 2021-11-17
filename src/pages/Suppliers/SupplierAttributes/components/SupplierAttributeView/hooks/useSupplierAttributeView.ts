import { useCallback, useContext } from 'react'

import SupplierAttribute from '../../../../../../../api/suppliers/models/SupplierAttribute'
import SupplierAttributesActionsContext from '../../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseSupplierAttributeViewReturn {
    map: (attribute: SupplierAttribute) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useSupplierAttributeView = (): UseSupplierAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(SupplierAttributesActionsContext)

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
        (attribute: SupplierAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useSupplierAttributeView
