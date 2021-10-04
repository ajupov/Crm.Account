import React, { FC, useContext } from 'react'

import CustomerAttributeChangesContext from '../../../../contexts/CustomerAttributeChangesContext/CustomerAttributeChangesContext'
import Table from '../../../../../../../components/common/collections/Table/Table'
import useCustomerAttributeChangesTable from './hooks/useCustomerAttributeChangesTable'

const CustomerAttributeChangesTable: FC = () => {
    const state = useContext(CustomerAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useCustomerAttributeChangesTable()

    return (
        <Table
            isLoading={state.isLoading}
            headers={headers}
            rows={map(state.changes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default CustomerAttributeChangesTable
