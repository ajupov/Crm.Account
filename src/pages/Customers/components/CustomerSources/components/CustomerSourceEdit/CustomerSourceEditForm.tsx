import React, { FC, useContext } from 'react'

import CustomerSourceContext from '../../contexts/CustomerSourceContext/CustomerSourceContext'
import CustomerSourcesRoutes from '../../routes/CustomerSourcesRoutes'
import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import useCustomerSourceOnChange from '../../hooks/change/useCustomerSourceOnChange'
import useCustomerSourcesActions from '../../contexts/CustomerSourcesActionsContext/hooks/useCustomerSourcesActions'

const CustomerSourceEditForm: FC = () => {
    const state = useContext(CustomerSourceContext)
    const { isLoading } = useCustomerSourcesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useCustomerSourceOnChange()

    return state.source.id ? (
        <EditForm
            id={state.source.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.source.createDateTime}
            lastModifyDateTime={state.source.modifyDateTime}
            historyLink={CustomerSourcesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default CustomerSourceEditForm
