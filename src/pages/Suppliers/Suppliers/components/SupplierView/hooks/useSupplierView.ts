import { useCallback, useContext } from 'react'

import Supplier from '../../../../../../../api/suppliers/models/Supplier'
import SupplierContext from '../../../contexts/SupplierContext/SupplierContext'
import SuppliersActionsContext from '../../../contexts/SuppliersActionsContext/SuppliersActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/supplierAttributesMapper'
import { useHistory } from 'react-router'
import useSupplierAttributesLoad from '../../../hooks/load/useSupplierAttributesLoad'

interface UseSupplierViewReturn {
    map: (supplier: Supplier) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useSupplierView = (): UseSupplierViewReturn => {
    const history = useHistory()
    const supplierState = useContext(SupplierContext)
    const actionsState = useContext(SuppliersActionsContext)
    const { attributesAsOptions } = useSupplierAttributesLoad()

    const onClickDelete = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsDeleting(true)
        },
        [actionsState]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsRestoring(true)
        },
        [actionsState]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapAttributes = useCallback(
        () => joinAttributes(supplierState.supplier.attributeLinks, attributesAsOptions),
        [attributesAsOptions, supplierState.supplier.attributeLinks]
    )

    const map = useCallback(
        (supplier: Supplier): ViewDataProps[] => [
            { label: 'Название', value: supplier.name },
            { label: 'Телефон', value: supplier.phone },
            { label: 'Email', value: supplier.email },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: supplier.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useSupplierView
