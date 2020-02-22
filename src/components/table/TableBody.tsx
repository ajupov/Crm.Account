import { Button, Checkbox, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

import { Link } from 'react-router-dom'

export interface TableBodyProps {
    rows: TableBodyRowProps[]
}

export interface TableBodyRowProps {
    cells: any[]
    onClickRow?: (event: Event) => void
    onClickEditButton?: (event: Event) => void
    onClickDeleteButton?: () => void
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
    const renderCells = (row: TableBodyRowProps): JSX.Element[] =>
        row.cells.map((cell, index) => <Table.Cell key={index}>{cell}</Table.Cell>)

    const renderRows = (): JSX.Element[] =>
        rows.map((row, index) => (
            <Table.Row onClick={row.onClickRow} key={index}>
                <Table.Cell textAlign="center" key={`MultiselectableCheckboxCell_${index}`}>
                    <Checkbox />
                </Table.Cell>
                {renderCells(row)}
                <Table.Cell textAlign="center" key={`ActionsHeaderCell_${index}`}>
                    <Button.Group basic>
                        <Button onClick={row.onClickEditButton} icon="edit" />
                        <Button onClick={row.onClickDeleteButton} icon="remove" />
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        ))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
