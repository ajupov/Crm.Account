import { Button, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface TableBodyProps {
    rows: TableBodyRowProps[]
}

export interface TableBodyRowProps {
    cells: TableBodyCellProps[]
    onClickRow: (event: Event) => void
    onClickEditButton: (event: React.MouseEvent) => void
    onClickDeleteButton: (event: React.MouseEvent) => void
}

export type TableCellTextAlign = 'center' | 'left' | 'right'

export interface TableBodyCellProps {
    value?: any
    textAlign?: TableCellTextAlign
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
    const renderCells = (row: TableBodyRowProps): JSX.Element[] =>
        row.cells.map((cell, index) => (
            <Table.Cell textAlign={cell.textAlign ?? 'left'} key={index}>
                {cell.value}
            </Table.Cell>
        ))

    const renderRows = (): JSX.Element | JSX.Element[] =>
        rows.map((row, index) => (
            <Table.Row style={{ cursor: 'pointer' }} onClick={row.onClickRow} key={index}>
                {renderCells(row)}
                <Table.Cell textAlign="center">
                    <Button.Group basic compact fluid size="mini">
                        <Button onClick={row.onClickEditButton} icon="edit" />
                        <Button onClick={row.onClickDeleteButton} icon="remove" />
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        ))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
