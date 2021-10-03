import React, { FC, useContext } from 'react'

import CustomerSourceContext from '../../contexts/CustomerSourceContext/CustomerSourceContext'
import CustomerSourcesRoutes from '../../routes/CustomerSourcesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useCustomerSourceView from './hooks/useCustomerSourceView'
import useCustomerSourcesActions from '../../contexts/CustomerSourcesActionsContext/hooks/useCustomerSourcesActions'

const CustomerSourceViewForm: FC = () => {
    const state = useContext(CustomerSourceContext)
    const { isLoading } = useCustomerSourcesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useCustomerSourceView()

    return (
        <View
            id={state.source.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.source.isDeleted}
            createDate={state.source.createDateTime}
            lastModifyDateTime={state.source.modifyDateTime}
            data={map(state.source)}
            editLink={CustomerSourcesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={CustomerSourcesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerSourceViewForm
