import { Button, List, Table } from 'semantic-ui-react'
import React, { FC, useCallback, useMemo } from 'react'

interface TableBodyCellProps {
    value?: string | string[]
    textAlign?: TableCellTextAlign
}

export interface TableBodyRowProps {
    id?: string
    isDeleted?: boolean
    cells: TableBodyCellProps[]
    onClickRow?: (id: string) => void
    onClickEditButton?: (id: string) => void
    onClickDeleteButton?: (id: string) => void
    onClickRestoreButton?: (id: string) => void
}

export interface TableBodyProps {
    rows: TableBodyRowProps[]
    hasActions?: boolean
}

export type TableCellTextAlign = 'center' | 'left' | 'right'

const TableBody: FC<TableBodyProps> = ({ rows, hasActions }) => {
    const onClick = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            if (row.id && row.onClickRow) {
                row.onClickRow(row.id)
            }

            event.stopPropagation()
        },
        []
    )

    const onClickEdit = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            if (row.id && row.onClickEditButton) {
                row.onClickEditButton(row.id)
            }

            event.stopPropagation()
        },
        []
    )

    const onClickDelete = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            if (row.id && row.onClickDeleteButton) {
                row.onClickDeleteButton(row.id)
            }

            event.stopPropagation()
        },
        []
    )

    const onClickRestore = useCallback(
        (row: TableBodyRowProps) => (event: React.MouseEvent) => {
            if (row.id && row.onClickRestoreButton) {
                row.onClickRestoreButton(row.id)
            }

            event.stopPropagation()
        },
        []
    )

    const renderCellArrayValue = useCallback(
        (values: string[]) => values.map((value, index) => <List.Item key={index}>{value}</List.Item>),
        []
    )

    const renderCells = useCallback(
        (row: TableBodyRowProps) =>
            row.cells.map((cell, index) => (
                <Table.Cell key={index} textAlign={cell.textAlign ?? 'left'}>
                    {cell.value instanceof Array ? <List>{renderCellArrayValue(cell.value)}</List> : cell.value}
                </Table.Cell>
            )),
        [renderCellArrayValue]
    )

    const rowComponents = useMemo(
        () =>
            rows.map(row => (
                <Table.Row
                    key={row.id}
                    negative={row.isDeleted}
                    style={{ cursor: row.onClickRow ? 'pointer' : 'default' }}
                    onClick={onClick(row)}
                >
                    {renderCells(row)}
                    {hasActions && (
                        <Table.Cell textAlign="center">
                            <Button.Group basic compact fluid size="mini">
                                {row.onClickEditButton && <Button onClick={onClickEdit(row)} icon="edit" />}
                                {!row.isDeleted && row.onClickDeleteButton && (
                                    <Button onClick={onClickDelete(row)} icon="trash" />
                                )}
                                {row.isDeleted && row.onClickRestoreButton && (
                                    <Button onClick={onClickRestore(row)} icon="redo" />
                                )}
                            </Button.Group>
                        </Table.Cell>
                    )}
                </Table.Row>
            )),
        [hasActions, onClick, onClickDelete, onClickEdit, onClickRestore, renderCells, rows]
    )

    return <Table.Body>{rowComponents}</Table.Body>
}

export default TableBody
