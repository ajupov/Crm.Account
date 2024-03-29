import React, { FC, useContext } from 'react'

import ProductStatusesContext from '../../contexts/ProductStatusesContext/ProductStatusesContext'
import ProductStatusesRoutes from '../../routes/ProductStatusesRoutes'
import Table from '../../../../../components/common/collections/Table/Table'
import useProductStatusesTable from './hooks/useProductStatusesTable'

const ProductStatusesTable: FC = () => {
    const state = useContext(ProductStatusesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useProductStatusesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.statuses)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={ProductStatusesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductStatusesTable
