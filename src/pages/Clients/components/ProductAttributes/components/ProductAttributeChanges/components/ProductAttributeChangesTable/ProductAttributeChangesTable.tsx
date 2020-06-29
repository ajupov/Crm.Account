import React, { FC, useContext } from 'react'

import ProductAttributeChangesContext from '../../../../contexts/ProductAttributeChangesContext/ProductAttributeChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useProductAttributeChangesTable from './hooks/useProductAttributeChangesTable'

const ProductAttributeChangesTable: FC = () => {
    const state = useContext(ProductAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductAttributeChangesTable()

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

export default ProductAttributeChangesTable
