import React, { FC, useContext } from 'react'

import OrderTypeContext from '../../contexts/OrderTypeContext/OrderTypeContext'
import OrderTypesRoutes from '../../routes/OrderTypesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useOrderTypeOnChange from '../../hooks/change/useOrderTypeOnChange'
import useOrderTypesActions from '../../contexts/OrderTypesActionsContext/hooks/useOrderTypesActions'

const OrderTypeEditForm: FC = () => {
    const state = useContext(OrderTypeContext)
    const { isLoading } = useOrderTypesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useOrderTypeOnChange()

    return state.type.id ? (
        <EditForm
            id={state.type.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            historyLink={OrderTypesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default OrderTypeEditForm
