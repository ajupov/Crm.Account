import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import SupplierContext from '../../contexts/SupplierContext/SupplierContext'
import SuppliersRoutes from '../../routes/SuppliersRoutes'
import useSupplierOnChange from '../../hooks/change/useSupplierOnChange'
import useSuppliersActions from '../../contexts/SuppliersActionsContext/hooks/useSuppliersActions'

const SupplierEditForm: FC = () => {
    const state = useContext(SupplierContext)
    const { isLoading } = useSuppliersActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useSupplierOnChange()

    return state.supplier.id ? (
        <EditForm
            id={state.supplier.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.supplier.createDateTime}
            lastModifyDateTime={state.supplier.modifyDateTime}
            historyLink={SuppliersRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default SupplierEditForm
