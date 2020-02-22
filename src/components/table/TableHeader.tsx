import { Checkbox, SemanticWIDTHS, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface TableHeaderProps {
    headers: TableHeaderRowProps[]
}

export interface TableHeaderRowProps {
    value?: string
    width?: SemanticWIDTHS
    onClick?: () => void
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
    const renderCells = (): JSX.Element[] =>
        headers.map((row, index) => (
            <Table.HeaderCell textAlign="center" width={row.width} key={index}>
                {row.value}
            </Table.HeaderCell>
        ))

    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign="center" width="1" key={'MultiselectableCheckboxHeaderCell'}>
                    <Checkbox />
                </Table.HeaderCell>
                {renderCells()}
                <Table.HeaderCell textAlign="center" width="2" key={'ActionsHeaderCell'} />
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
