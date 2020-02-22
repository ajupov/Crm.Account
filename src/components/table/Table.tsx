import React, { FC } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderRowProps } from './TableHeader'

import { Table as SemanticUiTable } from 'semantic-ui-react'

interface TableProps {
    headers: TableHeaderRowProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
}

const Table: FC<TableProps> = ({ headers, rows }) => (
    <SemanticUiTable compact sortable striped stackable padded selectable color="grey">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
        {/* <TableFooter {...footer} /> */}
    </SemanticUiTable>
)

export default Table
