import React, { FC, useContext } from 'react'

import CustomerContext from '../../contexts/CustomerContext/CustomerContext'
import CustomersRoutes from '../../routes/CustomersRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useCustomerView from './hooks/useCustomerView'
import useCustomersActions from '../../contexts/CustomersActionsContext/hooks/useCustomersActions'

const CustomerViewForm: FC = () => {
    const state = useContext(CustomerContext)
    const { isLoading } = useCustomersActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useCustomerView()

    return (
        <View
            id={state.customer.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.customer.isDeleted}
            createDate={state.customer.createDateTime}
            lastModifyDateTime={state.customer.modifyDateTime}
            data={map(state.customer)}
            editLink={CustomersRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={CustomersRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerViewForm
