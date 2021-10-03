import React, { FC, useContext } from 'react'

import OrderStatusContext from '../../contexts/OrderStatusContext/OrderStatusContext'
import OrderStatusesRoutes from '../../routes/OrderStatusesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useOrderStatusOnChange from '../../hooks/change/useOrderStatusOnChange'
import useOrderStatusesActions from '../../contexts/OrderStatusesActionsContext/hooks/useOrderStatusesActions'

const OrderStatusEditForm: FC = () => {
    const state = useContext(OrderStatusContext)
    const { isLoading } = useOrderStatusesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useOrderStatusOnChange()

    return state.status.id ? (
        <EditForm
            id={state.status.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            historyLink={OrderStatusesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default OrderStatusEditForm
