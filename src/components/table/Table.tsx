import { Dimmer, Loader, Table as SemanticUiTable } from 'semantic-ui-react'
import React, { FC } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderCellProps } from './TableHeader'

interface TableProps {
    isLoading: boolean
    headerCells: TableHeaderCellProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
}

const Table: FC<TableProps> = ({ isLoading, headerCells: headers, rows, footer }) => (
    <>
        <Dimmer active={isLoading} inverted>
            <Loader>Загрузка</Loader>
        </Dimmer>

        <SemanticUiTable sortable compact celled striped selectable color="black">
            <TableHeader headerCells={headers} />
            <TableBody rows={rows} />
            <TableFooter {...footer} columnsCount={headers.length} />
        </SemanticUiTable>
    </>
)

export default Table
