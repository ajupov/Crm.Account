import React, { FC, useContext } from 'react'

import ProductsContext from '../../contexts/ProductsContext/ProductsContext'
import ProductsRoutes from '../../routes/ProductsRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useProductsTable from './hooks/useProductsTable'

const ProductsTable: FC = () => {
    const state = useContext(ProductsContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.products)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={ProductsRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductsTable
