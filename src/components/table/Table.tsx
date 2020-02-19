import React, { FC } from 'react'

import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

interface TableProps {
    editable?: boolean
    deletable?: boolean
    multiselectable?: boolean
    totalCount: number
    pageSize: number
    onChangePage: (page: number) => void
    headers: any[]
    rows: any[][]
}

const Table: FC<TableProps> = ({
    editable,
    deletable,
    multiselectable,
    totalCount,
    pageSize,
    onChangePage,
    headers,
    rows
}) => (
    <SemanticUiTable compact sortable striped stackable padded selectable color="grey">
        <TableHeader editable={editable} deletable={deletable} multiselectable={multiselectable} headers={headers} />
        <TableBody editable={editable} deletable={deletable} multiselectable={multiselectable} rows={rows} />
        <TableFooter spanCount={rows.length} totalPages={totalCount / pageSize} onChangePage={onChangePage} />
    </SemanticUiTable>
)

export default Table
