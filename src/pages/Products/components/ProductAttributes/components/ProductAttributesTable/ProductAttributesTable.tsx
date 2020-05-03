import React, { FC, useContext } from 'react'

import ProductAttributesContext from '../../contexts/ProductAttributesContext/ProductAttributesContext'
import Table from '../../../../../../components/Table/Table'
import useProductAttributesTable from './hooks/useProductAttributesTable'

const ProductAttributesTable: FC = () => {
    const state = useContext(ProductAttributesContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useProductAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductAttributesTable
