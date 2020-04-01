import React, { FC } from 'react'
import { SemanticWIDTHS, Table } from 'semantic-ui-react'

export interface TableHeaderCellProps {
    label: string
    width: SemanticWIDTHS
    onClick: () => void
    orderBy?: string
}

type SemanticSortedType = 'ascending' | 'descending' | undefined

const TableHeader: FC<{ headers: TableHeaderCellProps[] }> = ({ headers }) => {
    const getSorted = (cell: TableHeaderCellProps): SemanticSortedType => {
        switch (cell.orderBy) {
            case 'asc':
                return 'ascending'
            case 'desc':
                return 'descending'
            default:
                return void 0
        }
    }

    const renderCells = (): JSX.Element[] =>
        headers.map((cell, index) => (
            <Table.HeaderCell width={cell.width} key={index} onClick={cell.onClick} sorted={getSorted(cell)}>
                {cell.label}
            </Table.HeaderCell>
        ))

    return (
        <Table.Header>
            <Table.Row textAlign="center">
                {renderCells()}

                <Table.HeaderCell width="1">Действия</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
