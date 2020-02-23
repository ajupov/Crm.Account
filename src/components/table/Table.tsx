import { Dimmer, Loader, Table as SemanticUiTable } from 'semantic-ui-react'
import React, { FC } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderRowProps } from './TableHeader'

interface TableProps {
    isLoading: boolean
    headers: TableHeaderRowProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
}

const Table: FC<TableProps> = ({ isLoading, headers, rows, footer }) => (
    <>
        <Dimmer active={isLoading} inverted>
            <Loader>Загрузка</Loader>
        </Dimmer>
        <SemanticUiTable compact celled striped selectable color="black">
            <TableHeader headers={headers} />
            <TableBody rows={rows} />
            <TableFooter {...footer} columnsCount={headers.length} />
        </SemanticUiTable>
    </>
)

export default Table
