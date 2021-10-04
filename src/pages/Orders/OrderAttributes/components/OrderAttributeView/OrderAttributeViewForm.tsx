import React, { FC, useContext } from 'react'

import OrderAttributeContext from '../../contexts/OrderAttributeContext/OrderAttributeContext'
import OrderAttributesRoutes from '../../routes/OrderAttributesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useOrderAttributeView from './hooks/useOrderAttributeView'
import useOrderAttributesActions from '../../contexts/OrderAttributesActionsContext/hooks/useOrderAttributesActions'

const OrderAttributeViewForm: FC = () => {
    const state = useContext(OrderAttributeContext)
    const { isLoading } = useOrderAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useOrderAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={OrderAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={OrderAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default OrderAttributeViewForm
