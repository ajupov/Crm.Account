import { Button, Checkbox, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

interface TableBodyProps {
    editable?: boolean
    deletable?: boolean
    multiselectable?: boolean
    rows: any[][]
}

const TableBody: FC<TableBodyProps> = ({ editable, deletable, multiselectable, rows }) => {
    const getMultiselectableCheckboxCell = (index: number): JSX.Element => (
        <Table.Cell key={`MultiselectableCheckboxCell_${index}`}>
            <Checkbox />
        </Table.Cell>
    )

    const getActionsCell = (index: number): JSX.Element => (
        <Table.Cell key={`ActionsHeaderCell_${index}`}>
            <Button.Group basic size="small">
                <Button icon="edit" />
                <Button icon="remove" />
            </Button.Group>
        </Table.Cell>
    )

    const renderCell = (value: any, index: number): JSX.Element => <Table.Cell key={index}>{value}</Table.Cell>

    const renderCells = (cells: any[], rowIndex: number): JSX.Element[] => {
        let result = []

        if (multiselectable) {
            result.push(getMultiselectableCheckboxCell(rowIndex))
        }

        result = [...result, ...cells.map((cell, index) => renderCell(cell, index))]

        if (editable || deletable) {
            result.push(getActionsCell(rowIndex))
        }

        return result
    }

    const renderRow = (cells: any[], index: number): JSX.Element => (
        <Table.Row key={index}>{renderCells(cells, index)}</Table.Row>
    )

    const renderRows = (): JSX.Element[] => rows.map((row, index) => renderRow(row, index))

    return <Table.Body>{renderRows()}</Table.Body>
}

export default TableBody
