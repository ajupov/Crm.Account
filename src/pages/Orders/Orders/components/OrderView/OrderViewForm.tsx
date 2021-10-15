import React, { FC, useContext } from 'react'

import OrderContext from '../../contexts/OrderContext/OrderContext'
import OrdersRoutes from '../../routes/OrdersRoutes'
import View from '../../../../../components/common/grids/View/View'
import useOrderView from './hooks/useOrderView'
import useOrdersActions from '../../contexts/OrdersActionsContext/hooks/useOrdersActions'

const OrderViewForm: FC = () => {
    const state = useContext(OrderContext)
    const { isLoading } = useOrdersActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useOrderView()

    return (
        <View
            id={state.order.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.order.isDeleted}
            createDate={state.order.createDateTime}
            lastModifyDateTime={state.order.modifyDateTime}
            data={map(state.order)}
            editLink={OrdersRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={OrdersRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderViewForm
