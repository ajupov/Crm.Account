import React, { FC, useContext } from 'react'

import ProductStatusChangesContext from '../../../../contexts/ProductStatusChangesContext/ProductStatusChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useProductStatusChangesTable from './hooks/useProductStatusChangesTable'

const ProductStatusChangesTable: FC = () => {
    const state = useContext(ProductStatusChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductStatusChangesTable()

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

export default ProductStatusChangesTable
