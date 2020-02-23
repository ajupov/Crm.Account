import { Button, Input, SemanticWIDTHS, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface TableHeaderProps {
    headers: TableHeaderRowProps[]
}

export type Sorting = '' | 'asc' | 'desc'

export interface TableHeaderRowProps {
    value?: string
    width?: SemanticWIDTHS
    sorting: Sorting
    onClick?: () => void
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
    const renderCells = (): JSX.Element[] =>
        headers.map((row, index) => (
            <Table.HeaderCell width={row.width} key={index}>
                {row.value}
            </Table.HeaderCell>
        ))

    const renderSearchCells = (): JSX.Element[] =>
        headers.map((row, index) => (
            <Table.HeaderCell width={row.width} key={index} style={{ padding: '4px', background: 'white' }}>
                <Input fluid icon="calendar" placeholder="Введите для поиска" size="small" />
            </Table.HeaderCell>
        ))

    return (
        <Table.Header>
            <Table.Row textAlign="center">
                {renderCells()}
                <Table.HeaderCell width="2">Действия</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                {renderSearchCells()}
                <Table.HeaderCell width="2" style={{ padding: '4px', background: 'white' }}>
                    <Button basic compact fluid>
                        Создать
                    </Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
