import React, { FC, useContext } from 'react'

import ProductChangesContext from '../../../../contexts/ProductChangesContext/ProductChangesContext'
import Table from '../../../../../../../../components/Table/Table'
import useProductChangesTable from './hooks/useProductChangesTable'

const ProductChangesTable: FC = () => {
    const state = useContext(ProductChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductChangesTable()

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

export default ProductChangesTable
