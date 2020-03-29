import React, { FC } from 'react'
import { SemanticWIDTHS, Table } from 'semantic-ui-react'

import { OrderBy } from './TableData'

export interface TableHeaderCellProps {
    value: string
    width: SemanticWIDTHS
    onClick: () => void
    orderBy: OrderBy
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
                return undefined // eslint-disable-line no-undefined
        }
    }

    const renderCells = (): JSX.Element[] =>
        headers.map((cell, index) => (
            <Table.HeaderCell width={cell.width} key={index} onClick={cell.onClick} sorted={getSorted(cell)}>
                {cell.value}
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
