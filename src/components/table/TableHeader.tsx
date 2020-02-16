import React, { FC } from 'react'

import { Table } from 'semantic-ui-react'

interface TableHeaderProps {
    headers: any[]
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
    const renderCell = (name: string): JSX.Element => <Table.HeaderCell key={name}>{name}</Table.HeaderCell>

    const renderCells = (): JSX.Element[] => headers.map(name => renderCell(name))

    return (
        <Table.Header>
            <Table.Row>{renderCells()}</Table.Row>
        </Table.Header>
    )
}

export default TableHeader
