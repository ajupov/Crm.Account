import React, { FC, useContext } from 'react'

import ProductAttributesContext from '../../contexts/ProductAttributesContext/ProductAttributesContext'
import ProductAttributesRoutes from '../../routes/ProductAttributesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useProductAttributesTable from './hooks/useProductAttributesTable'

const ProductAttributesTable: FC = () => {
    const state = useContext(ProductAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={ProductAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductAttributesTable
