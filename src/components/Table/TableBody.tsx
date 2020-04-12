import { Button, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

interface TableBodyCellProps {
    value?: any
    textAlign?: TableCellTextAlign
}

export interface TableBodyRowProps {
    id: string
    isDeleted: boolean
    cells: TableBodyCellProps[]
    onClickRow: (id: string) => void
    onClickEditButton: (id: string) => void
    onClickDeleteButton: (id: string) => void
    onClickRestoreButton: (id: string) => void
}

export type TableCellTextAlign = 'center' | 'left' | 'right'

const TableBody: FC<{ rows: TableBodyRowProps[] }> = ({ rows }) => {
    const onClick = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            row.onClickRow(row.id)

            event.stopPropagation()
        },
        []
    )

    const onClickEdit = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            row.onClickEditButton(row.id)

            event.stopPropagation()
        },
        []
    )

    const onClickDelete = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            row.onClickDeleteButton(row.id)

            event.stopPropagation()
        },
        []
    )

    const onClickRestore = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            row.onClickRestoreButton(row.id)

            event.stopPropagation()
        },
        []
    )

    const renderCells = (row: TableBodyRowProps): JSX.Element[] =>
        row.cells.map((cell, index) => (
            <Table.Cell textAlign={cell.textAlign ?? 'left'} key={index}>
                {cell.value}
            </Table.Cell>
        ))

    const renderRows = (): JSX.Element | JSX.Element[] =>
        rows.map((row, index) => (
            <Table.Row style={{ cursor: 'pointer' }} onClick={onClick(row)} key={index}>
                {renderCells(row)}
                <Table.Cell textAlign="center">
                    <Button.Group basic compact fluid size="mini">
                        <Button onClick={onClickEdit(row)} icon="edit" />
                        {!row.isDeleted && row.onClickDeleteButton && (
                            <Button onClick={onClickDelete(row)} icon="trash" />
                        )}
                        {row.isDeleted && row.onClickRestoreButton && (
                            <Button onClick={onClickRestore(row)} icon="redo" />
                        )}
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        ))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
