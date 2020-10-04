import { useCallback, useContext } from 'react'

import ProductAttribute from '../../../../../../../../api/products/models/ProductAttribute'
import ProductAttributesActionsContext from '../../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContext'
import ProductAttributesRoutes from '../../../routes/ProductAttributesRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useHistory } from 'react-router'

interface UseProductAttributeViewReturn {
    map: (attribute: ProductAttribute) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductAttributeView = (): UseProductAttributeViewReturn => {
    const history = useHistory()
    const state = useContext(ProductAttributesActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ProductAttributesRoutes.Edit}/${id}`), [history])

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
        (attribute: ProductAttribute): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(attribute.type) },
            { label: 'Наименование', value: attribute.key },
            { label: 'Удален', value: attribute.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel }
}

export default useProductAttributeView
