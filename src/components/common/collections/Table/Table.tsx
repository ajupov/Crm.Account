import React, { FC, useCallback } from 'react'
import { Responsive, Table as SemanticUiTable } from 'semantic-ui-react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderCellProps } from './TableHeader'

import Loader from '../../other/Loader/Loader'
import TableCardHeader from './TableCardHeader'

export interface TableProps {
    isLoading: boolean
    hasActions?: boolean
    headers: TableHeaderCellProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
    lastModifyDateTime?: string
    onClickCreate?: () => void
    onClickDownloadAsCsv?: () => void
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
}) => {
    const getTable = useCallback(
        (display: string) => (
            <SemanticUiTable
                sortable={hasActions}
                compact
                celled
                striped
                selectable={hasActions}
                color="black"
                style={{ display }}
            >
                <TableHeader headers={headers} hasActions={hasActions} />
                <TableBody rows={rows} hasActions={hasActions} />
                <TableFooter {...footer} columnsCount={headers.length} />
            </SemanticUiTable>
        ),
        [footer, hasActions, headers, rows]
    )

    return (
        <>
            <Loader isLoading={isLoading} />
            <TableCardHeader
                lastModifyDateTime={lastModifyDateTime}
                onClickCreate={onClickCreate}
                onClickDownloadAsCsv={onClickDownloadAsCsv}
            />
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth} style={{ overflow: 'auto' }}>
                {getTable('block')}
            </Responsive>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth} style={{ overflow: 'auto' }}>
                {getTable('table')}
            </Responsive>
        </>
    )
}

export default Table
