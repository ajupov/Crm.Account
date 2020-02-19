import { Checkbox, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

interface TableHeaderProps {
    editable?: boolean
    deletable?: boolean
    multiselectable?: boolean
    headers: any[]
}

const TableHeader: FC<TableHeaderProps> = ({ editable, deletable, multiselectable, headers }) => {
    const getMultiselectableCheckboxHeaderCell = (): JSX.Element => (
        <Table.HeaderCell key={'MultiselectableCheckboxHeaderCell'}>
            <Checkbox />
        </Table.HeaderCell>
    )

    const getActionsHeaderCell = (): JSX.Element => <Table.HeaderCell key={'ActionsHeaderCell'} />

    const renderCell = (name: string, index: number): JSX.Element => (
        <Table.HeaderCell key={index}>{name}</Table.HeaderCell>
    )

    const renderCells = (): JSX.Element[] => {
        let result = []

        if (multiselectable) {
            result.push(getMultiselectableCheckboxHeaderCell())
        }

        result = [...result, ...headers.map((name, index) => renderCell(name, index))]

        if (editable || deletable) {
            result.push(getActionsHeaderCell())
        }

        return result
    }

    return (
        <Table.Header>
            <Table.Row>{renderCells()}</Table.Row>
        </Table.Header>
    )
}

export default TableHeader
