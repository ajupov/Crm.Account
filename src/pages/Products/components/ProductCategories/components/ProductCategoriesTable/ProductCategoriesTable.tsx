import React, { FC, useContext } from 'react'

import ProductCategoriesContext from '../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import Table from '../../../../../../components/Table/Table'
import useProductCategoriesTable from './hooks/useProductCategoriesTable'

const ProductCategoriesTable: FC = () => {
    const state = useContext(ProductCategoriesContext)
    const {
        page,
        limit,
        total,
        headers,
        map,
        onClickCreate,
        onClickDownloadAsCsv,
        onClickChangePage
    } = useProductCategoriesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.categories)}
            footer={{ page, limit, total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductCategoriesTable
