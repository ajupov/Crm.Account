import { Button, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

interface TableBodyCellProps {
    value?: any
    textAlign?: TableCellTextAlign
}

export interface TableBodyRowProps {
    cells: TableBodyCellProps[]
    isDeleted: boolean
    onClickRow: (event: Event) => void
    onClickEditButton: (event: React.MouseEvent) => void
    onClickDeleteButton: (event: React.MouseEvent) => void
    onClickRestoreButton: (event: React.MouseEvent) => void
}

export type TableCellTextAlign = 'center' | 'left' | 'right'

const TableBody: FC<{ rows: TableBodyRowProps[] }> = ({ rows }) => {
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
                        {!row.isDeleted && row.onClickDeleteButton && (
                            <Button onClick={row.onClickDeleteButton} icon="trash" />
                        )}
                        {row.isDeleted && row.onClickRestoreButton && (
                            <Button onClick={row.onClickRestoreButton} icon="redo" />
                        )}
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        ))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
