import React, { FC, useCallback } from 'react'
import { SemanticWIDTHS, Table } from 'semantic-ui-react'

export interface TableHeaderCellProps {
    key: string
    label: string
    width: SemanticWIDTHS
    orderBy?: string
    onClick?: () => void
}

export interface TableHeaderProps {
    headers: TableHeaderCellProps[]
    hasActions?: boolean
}

type SemanticSortedType = 'ascending' | 'descending' | undefined

const TableHeader: FC<TableHeaderProps> = ({ headers, hasActions }) => {
    const getSorted = useCallback((cell: TableHeaderCellProps) => {
        switch (cell.orderBy) {
            case 'asc':
                return 'ascending'
            case 'desc':
                return 'descending'
            default:
                return void 0
        }
    }, [])

    const renderCells = useCallback(
        () =>
            headers.map(cell => (
                <Table.HeaderCell width={cell.width} key={cell.key} onClick={cell.onClick} sorted={getSorted(cell)}>
                    {cell.label}
                </Table.HeaderCell>
            )),
        [getSorted, headers]
    )

    return (
        <Table.Header>
            <Table.Row textAlign="center">
                {renderCells()}
                {hasActions && (
                    <Table.HeaderCell width="1" style={{ pointerEvents: 'none' }}>
                        Действия
                    </Table.HeaderCell>
                )}
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
