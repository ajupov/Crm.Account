import React, { FC, useContext } from 'react'

import CustomerAttributesContext from '../../contexts/CustomerAttributesContext/CustomerAttributesContext'
import CustomerAttributesRoutes from '../../routes/CustomerAttributesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useCustomerAttributesTable from './hooks/useCustomerAttributesTable'

const CustomerAttributesTable: FC = () => {
    const state = useContext(CustomerAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomerAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={CustomerAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CustomerAttributesTable
