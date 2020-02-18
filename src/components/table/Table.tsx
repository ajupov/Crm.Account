import React, { FC } from 'react'

import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

interface TableProps {
    headers: any[]
    rows: any[][]
    totalCount: number
}

const Table: FC<TableProps> = ({ headers, rows, totalCount }) => (
    <SemanticUiTable compact sortable striped stackable padded selectable color="grey">
        <TableHeader headers={headers}></TableHeader>
        <TableBody rows={rows} />
        <TableFooter spanCount={rows.length} totalCount={totalCount} />
    </SemanticUiTable>
)

export default Table
