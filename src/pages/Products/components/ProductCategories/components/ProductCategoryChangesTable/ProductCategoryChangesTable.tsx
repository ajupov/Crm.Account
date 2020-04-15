import React, { FC, useContext } from 'react'

import ProductCategoryChangesContext from '../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContext'
import Table from '../../../../../../components/Table/Table'
import useProductCategoryChangesTable from './hooks/useProductCategoryChangesTable'

const ProductCategoryChangesTable: FC = () => {
    const state = useContext(ProductCategoryChangesContext)
    const {
        page,
        limit,
        total,
        headers,
        map,
        onClickDownloadAsCsv,
        onClickChangePage
    } = useProductCategoryChangesTable()

    return (
        <Table
            isLoading={state.isLoading}
            headers={headers}
            rows={map(state.changes)}
            footer={{ page, limit, total, onClickChangePage }}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductCategoryChangesTable
