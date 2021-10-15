import React, { FC, useContext } from 'react'

import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import OrderContext from '../../contexts/OrderContext/OrderContext'
import OrdersRoutes from '../../routes/OrdersRoutes'
import useOrderOnChange from '../../hooks/change/useOrderOnChange'
import useOrdersActions from '../../contexts/OrdersActionsContext/hooks/useOrdersActions'

const OrderEditForm: FC = () => {
    const state = useContext(OrderContext)
    const { isLoading } = useOrdersActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useOrderOnChange()

    return state.order.id ? (
        <EditForm
            id={state.order.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.order.createDateTime}
            lastModifyDateTime={state.order.modifyDateTime}
            historyLink={OrdersRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default OrderEditForm
