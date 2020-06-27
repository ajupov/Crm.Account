import React, { FC, useContext } from 'react'

import ProductsContext from '../../contexts/ProductsContext/ProductsContext'
import Table from '../../../../../../components/common/collections/Table/Table'
import useProductsTable from './hooks/useProductsTable'

const ProductsTable: FC = () => {
    const state = useContext(ProductsContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useProductsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.products)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductsTable
