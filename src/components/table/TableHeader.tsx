import { Button, Dropdown, Input, SemanticWIDTHS, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableHeaderProps {
    headers: TableHeaderRowProps[]
    onClickCreate: (event: React.MouseEvent) => void
}

export type Sorting = '' | 'asc' | 'desc'
export type Type = 'string' | 'datetime' | 'boolean'

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
        const options = [
            { key: 1, text: 'Нет', value: false },
            { key: 2, text: 'Да', value: true }
        ]

        switch (type) {
            case 'string':
                return <Input size="mini" fluid placeholder="Введите для поиска" />
            case 'datetime':
                return (
                    <>
                        <Input fluid size="mini" type="date" style={{ width: '150px' }} label="с" />
                        <Input fluid size="mini" type="date" style={{ width: '150px' }} label="по" />
                    </>
                )
            case 'boolean':
                return (
                    <Dropdown
                        style={{
                            width: '70px',
                            paddingTop: '4px',
                            paddingBottom: '4px',
                            minHeight: '30px',
                            lineHeight: '20px',
                            fontSize: '0.8em',
                            fontWeight: 'normal'
                        }}
                        fluid
                        options={options}
                        selection
                        basic
                        compact
                    />
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
