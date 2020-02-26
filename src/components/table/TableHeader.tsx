import { Button, Input, SemanticWIDTHS, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableHeaderProps {
    headers: TableHeaderRowProps[]
    onClickCreate: (event: React.MouseEvent) => void
}

export type Sorting = '' | 'asc' | 'desc'
export type Type = 'string' | 'datetime'

export interface TableHeaderRowProps {
    value?: string
    width?: SemanticWIDTHS
    type: Type
    sorting: Sorting
    onClick?: () => void
}

const TableHeader: FC<TableHeaderProps> = ({ headers, onClickCreate }) => {
    const onCreateClick = useCallback(
        (event: React.MouseEvent): void => {
            onClickCreate(event)
            event.stopPropagation()
        },
        [onClickCreate]
    )

    const renderCells = (): JSX.Element[] =>
        headers.map((row, index) => (
            <Table.HeaderCell width={row.width} key={index}>
                {row.value}
            </Table.HeaderCell>
        ))

    const renderSearch = (type: Type): JSX.Element | null => {
        switch (type) {
            case 'string':
                return <Input fluid placeholder="Введите для поиска" size="mini" />
            case 'datetime':
                return (
                    <>
                        <Input type="date" size="mini" style={{ width: '130px' }} />
                        {' — '}
                        <Input type="date" size="mini" style={{ width: '130px' }} />
                    </>
                )
            default:
                return null
        }
    }

    const renderSearchCells = (): JSX.Element[] =>
        headers.map((row, index) => (
            <Table.HeaderCell width={row.width} key={index} style={{ padding: '4px', background: 'white' }}>
                {renderSearch(row.type)}
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
                    <Button basic compact fluid onClick={onCreateClick}>
                        Создать
                    </Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
