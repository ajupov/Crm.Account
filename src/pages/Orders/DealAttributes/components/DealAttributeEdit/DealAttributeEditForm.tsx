import React, { FC, useContext } from 'react'

import OrderAttributeContext from '../../contexts/OrderAttributeContext/OrderAttributeContext'
import OrderAttributesRoutes from '../../routes/OrderAttributesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useOrderAttributeOnChange from '../../hooks/change/useOrderAttributeOnChange'
import useOrderAttributesActions from '../../contexts/OrderAttributesActionsContext/hooks/useOrderAttributesActions'

const OrderAttributeEditForm: FC = () => {
    const state = useContext(OrderAttributeContext)
    const { isLoading } = useOrderAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useOrderAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={OrderAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default OrderAttributeEditForm
