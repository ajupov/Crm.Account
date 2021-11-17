import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import SupplierAttributeContext from '../../contexts/SupplierAttributeContext/SupplierAttributeContext'
import SupplierAttributesRoutes from '../../routes/SupplierAttributesRoutes'
import useSupplierAttributeOnChange from '../../hooks/useSupplierAttributeOnChange'
import useSupplierAttributesActions from '../../contexts/SupplierAttributesActionsContext/hooks/useSupplierAttributesActions'

const SupplierAttributeEditForm: FC = () => {
    const state = useContext(SupplierAttributeContext)
    const { isLoading } = useSupplierAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useSupplierAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={SupplierAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default SupplierAttributeEditForm
