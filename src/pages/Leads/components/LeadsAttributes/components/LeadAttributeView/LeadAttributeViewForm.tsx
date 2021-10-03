import React, { FC, useContext } from 'react'

import CustomerAttributeContext from '../../contexts/CustomerAttributeContext/CustomerAttributeContext'
import CustomerAttributesRoutes from '../../routes/CustomerAttributesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useCustomerAttributeView from './hooks/useCustomerAttributeView'
import useCustomerAttributesActions from '../../contexts/CustomerAttributesActionsContext/hooks/useCustomerAttributesActions'

const CustomerAttributeViewForm: FC = () => {
    const state = useContext(CustomerAttributeContext)
    const { isLoading } = useCustomerAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useCustomerAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={CustomerAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={CustomerAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerAttributeViewForm
