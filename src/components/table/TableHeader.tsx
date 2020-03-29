import React, { FC } from 'react'
import { SemanticWIDTHS, Table } from 'semantic-ui-react'

export interface TableHeaderCellProps {
    value?: string
    width?: SemanticWIDTHS
}

const TableHeader: FC<{ headers: TableHeaderCellProps[] }> = ({ headers }) => {
    const renderCells = (): JSX.Element[] =>
        headers.map((cell, index) => (
            <Table.HeaderCell width={cell.width} key={index}>
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
