import React, { FC, useContext } from 'react'

import CustomerAttributeContext from '../../contexts/CustomerAttributeContext/CustomerAttributeContext'
import CustomerAttributesRoutes from '../../routes/CustomerAttributesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useCustomerAttributeOnChange from '../../hooks/useCustomerAttributeOnChange'
import useCustomerAttributesActions from '../../contexts/CustomerAttributesActionsContext/hooks/useCustomerAttributesActions'

const CustomerAttributeEditForm: FC = () => {
    const state = useContext(CustomerAttributeContext)
    const { isLoading } = useCustomerAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useCustomerAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={CustomerAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CustomerAttributeEditForm
