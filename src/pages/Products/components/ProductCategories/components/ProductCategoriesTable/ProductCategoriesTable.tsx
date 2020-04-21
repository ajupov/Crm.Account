import React, { FC, useContext } from 'react'

import ProductCategoriesContext from '../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import Table from '../../../../../../components/Table/Table'
import useProductCategoriesTable from './hooks/useProductCategoriesTable'

const ProductCategoriesTable: FC = () => {
    const state = useContext(ProductCategoriesContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useProductCategoriesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.categories)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductCategoriesTable
