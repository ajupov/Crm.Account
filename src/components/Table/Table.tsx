import React, { FC } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderCellProps } from './TableHeader'

import Loader from '../Loader/Loader'
import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableCardHeader from './TableCardHeader'

export interface TableProps {
    isLoading: boolean
    hasActions?: boolean
    headers: TableHeaderCellProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
    lastModifyDateTime?: string
    onClickCreate?: () => void
    onClickDownloadAsCsv: () => void
}

const Table: FC<TableProps> = ({
    isLoading,
    headers,
    rows,
    footer,
    hasActions,
    lastModifyDateTime,
    onClickCreate,
    onClickDownloadAsCsv
}) => (
    <>
        <Loader isLoading={isLoading} />
        <TableCardHeader
            lastModifyDateTime={lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
        <SemanticUiTable sortable={hasActions} compact celled striped selectable={hasActions} color="black">
            <TableHeader headers={headers} hasActions={hasActions} />
            <TableBody rows={rows} hasActions={hasActions} />
            <TableFooter {...footer} columnsCount={headers.length} />
        </SemanticUiTable>
    </>
)

export default Table
