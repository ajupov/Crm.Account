import React, { FC } from 'react'

import { Table } from 'semantic-ui-react'

interface TableBodyProps {
    rows: any[][]
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
    const renderCell = (value: any, index: number): JSX.Element => <Table.Cell key={index}>{value}</Table.Cell>

    const renderRow = (cells: any[], index: number): JSX.Element => (
        <Table.Row key={index}>{cells.map((cell, index) => renderCell(cell, index))}</Table.Row>
    )

    const renderRows = (): JSX.Element[] => rows.map((row, index) => renderRow(row, index))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
