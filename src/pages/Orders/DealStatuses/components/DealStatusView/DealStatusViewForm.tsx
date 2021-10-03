import React, { FC, useContext } from 'react'

import OrderStatusContext from '../../contexts/OrderStatusContext/OrderStatusContext'
import OrderStatusesRoutes from '../../routes/OrderStatusesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useOrderStatusView from './hooks/useOrderStatusView'
import useOrderStatusesActions from '../../contexts/OrderStatusesActionsContext/hooks/useOrderStatusesActions'

const OrderStatusViewForm: FC = () => {
    const state = useContext(OrderStatusContext)
    const { isLoading } = useOrderStatusesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useOrderStatusView()

    return (
        <View
            id={state.status.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.status.isDeleted}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            data={map(state.status)}
            editLink={OrderStatusesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={OrderStatusesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderStatusViewForm
