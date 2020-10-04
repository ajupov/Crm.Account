import { Media, MediaContextProvider } from '../../../../tokens/Tokens'
import React, { FC, useCallback } from 'react'
import TableBody, { TableBodyRowProps } from './TableBody'
import TableFooter, { TableFooterProps } from './TableFooter'
import TableHeader, { TableHeaderCellProps } from './TableHeader'

import Loader from '../../other/Loader/Loader'
import { Table as SemanticUiTable } from 'semantic-ui-react'
import TableCardHeader from './TableCardHeader'

export interface TableProps {
    isLoading: boolean
    hasActions?: boolean
    headers: TableHeaderCellProps[]
    rows: TableBodyRowProps[]
    footer: TableFooterProps
    lastModifyDateTime?: string
    createLink?: string
    onClickDownloadAsCsv?: () => void
}

const Table: FC<TableProps> = ({
    isLoading,
    headers,
    rows,
    footer,
    hasActions,
    lastModifyDateTime,
    createLink,
    onClickDownloadAsCsv
}) => {
    const getTable = useCallback(
        (display: string) => (
            <div style={{ overflow: 'auto' }}>
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
            </div>
        ),
        [footer, hasActions, headers, rows]
    )

    return (
        <>
            <Loader isLoading={isLoading} />
            <TableCardHeader
                lastModifyDateTime={lastModifyDateTime}
                createLink={createLink}
                onClickDownloadAsCsv={onClickDownloadAsCsv}
            />
            <MediaContextProvider>
                <Media lessThan="tablet">{getTable('block')}</Media>
                <Media greaterThanOrEqual="tablet">{getTable('table')}</Media>
            </MediaContextProvider>
        </>
    )
}

export default Table
