import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductStatusContext from '../../contexts/ProductStatusContext/ProductStatusContext'
import ProductStatusesRoutes from '../../routes/ProductStatusesRoutes'
import useProductStatusOnChange from '../../hooks/useProductStatusOnChange'
import useProductStatusesActions from '../../contexts/ProductStatusesActionsContext/hooks/useProductStatusesActions'

const ProductStatusEditForm: FC = () => {
    const state = useContext(ProductStatusContext)
    const { isLoading } = useProductStatusesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useProductStatusOnChange()

    return state.status.id ? (
        <EditForm
            id={state.status.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            historyLink={ProductStatusesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductStatusEditForm
