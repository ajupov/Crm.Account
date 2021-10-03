import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import CustomerContext from '../../contexts/CustomerContext/CustomerContext'
import CustomersRoutes from '../../routes/CustomersRoutes'
import useCustomerOnChange from '../../hooks/change/useCustomerOnChange'
import useCustomersActions from '../../contexts/CustomersActionsContext/hooks/useCustomersActions'

const CustomerEditForm: FC = () => {
    const state = useContext(CustomerContext)
    const { isLoading } = useCustomersActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useCustomerOnChange()

    return state.customer.id ? (
        <EditForm
            id={state.customer.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.customer.createDateTime}
            lastModifyDateTime={state.customer.modifyDateTime}
            historyLink={CustomersRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CustomerEditForm
