import React, { FC, useContext } from 'react'

import SupplierContext from '../../contexts/SupplierContext/SupplierContext'
import SuppliersRoutes from '../../routes/SuppliersRoutes'
import View from '../../../../../components/common/grids/View/View'
import useSupplierView from './hooks/useSupplierView'
import useSuppliersActions from '../../contexts/SuppliersActionsContext/hooks/useSuppliersActions'

const SupplierViewForm: FC = () => {
    const state = useContext(SupplierContext)
    const { isLoading } = useSuppliersActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useSupplierView()

    return (
        <View
            id={state.supplier.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.supplier.isDeleted}
            createDate={state.supplier.createDateTime}
            lastModifyDateTime={state.supplier.modifyDateTime}
            data={map(state.supplier)}
            editLink={SuppliersRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={SuppliersRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default SupplierViewForm
