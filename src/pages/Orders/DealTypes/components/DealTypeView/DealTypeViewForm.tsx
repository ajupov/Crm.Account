import React, { FC, useContext } from 'react'

import OrderTypeContext from '../../contexts/OrderTypeContext/OrderTypeContext'
import OrderTypesRoutes from '../../routes/OrderTypesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useOrderTypeView from './hooks/useOrderTypeView'
import useOrderTypesActions from '../../contexts/OrderTypesActionsContext/hooks/useOrderTypesActions'

const OrderTypeViewForm: FC = () => {
    const state = useContext(OrderTypeContext)
    const { isLoading } = useOrderTypesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useOrderTypeView()

    return (
        <View
            id={state.type.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.type.isDeleted}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            data={map(state.type)}
            editLink={OrderTypesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={OrderTypesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderTypeViewForm
