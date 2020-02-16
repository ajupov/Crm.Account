import React, { FC } from 'react'

import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

interface TableProps {
    headers: any[]
    rows: any[][]
}

const Table: FC<TableProps> = ({ headers: headerNames, rows }) => (
    <SemanticUiTable compact sortable striped stackable padded selectable color="grey">
        <TableHeader headers={headerNames}></TableHeader>
        <TableBody rows={rows} />
        <TableFooter spanCount={rows.length} />
    </SemanticUiTable>
)

export default Table
