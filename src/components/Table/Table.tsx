import React, { FC } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderCellProps } from './TableHeader'

import Loader from '../Loader/Loader'
import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableCardHeader from './TableCardHeader'

interface TableProps {
    isLoading: boolean
    headers: TableHeaderCellProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
    lastModifyDateTime?: string
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
}

const Table: FC<TableProps> = ({
    isLoading,
    headers,
    rows,
    footer,
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
        <SemanticUiTable sortable compact celled striped selectable color="black">
            <TableHeader headers={headers} />
            <TableBody rows={rows} />
            <TableFooter {...footer} columnsCount={headers.length} />
        </SemanticUiTable>
    </>
)

export default Table
