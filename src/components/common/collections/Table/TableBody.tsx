import { Button, List, Table } from 'semantic-ui-react'
import React, { FC, useCallback, useMemo } from 'react'

import { Link } from 'react-router-dom'

interface TableBodyCellProps {
    value?: string | string[]
    textAlign?: TableCellTextAlign
}

export interface TableBodyRowProps {
    id?: string
    height?: number
    isDeleted?: boolean
    cells: TableBodyCellProps[]
    viewLink?: string
    editLink?: string
    onClickDeleteButton?: (id: string) => void
    onClickRestoreButton?: (id: string) => void
}

export interface TableBodyProps {
    rows: TableBodyRowProps[]
    hasActions?: boolean
}

export type TableCellTextAlign = 'center' | 'left' | 'right'

const TableBody: FC<TableBodyProps> = ({ rows, hasActions }) => {
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

    const renderCellValue = useCallback(
        (cell: TableBodyCellProps) =>
            cell.value instanceof Array ? <List>{renderCellArrayValue(cell.value)}</List> : cell.value,
        [renderCellArrayValue]
    )

    const renderCells = useCallback(
        (row: TableBodyRowProps) =>
            row.cells.map((cell, index) => (
                <Table.Cell key={index} style={{ height: row.height ?? '100px' }}>
                    {row.id && row.viewLink ? (
                        <Link
                            to={`${row.viewLink}/${row.id}`}
                            style={{
                                color: 'rgba(0, 0, 0, 0.87)',
                                display: 'block',
                                height: '100%',
                                textAlign: cell.textAlign ?? 'left',
                                position: 'relative'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                {renderCellValue(cell)}
                            </div>
                        </Link>
                    ) : (
                        renderCellValue(cell)
                    )}
                </Table.Cell>
            )),
        [renderCellValue]
    )

    const rowComponents = useMemo(
        () =>
            rows.map(row => (
                <Table.Row
                    key={row.id}
                    negative={row.isDeleted}
                    style={{ cursor: row.viewLink ? 'pointer' : 'default' }}
                >
                    {renderCells(row)}
                    {hasActions && (
                        <Table.Cell textAlign="center">
                            <Button.Group basic compact fluid size="mini">
                                {row.id && row.editLink && (
                                    <Button as={Link} to={`${row.editLink}/${row.id}`} icon="edit" />
                                )}
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
        [hasActions, onClickDelete, onClickRestore, renderCells, rows]
    )

    return <Table.Body>{rowComponents}</Table.Body>
}

export default TableBody
