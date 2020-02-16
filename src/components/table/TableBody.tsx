import React, { FC } from 'react'

import { Table } from 'semantic-ui-react'

interface TableBodyProps {
    rows: any[][]
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
    const renderCell = (name: any): JSX.Element => <Table.Cell key={name}>{name}</Table.Cell>

    const renderRow = (cells: any[], index: number): JSX.Element => (
        <Table.Row key={index}>{cells.map(cell => renderCell(cell))}</Table.Row>
    )

    const renderRows = (): JSX.Element[] => rows.map((row, index) => renderRow(row, index))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
