import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableFooterProps {
    limit: number
    total: number
    columnsCount?: number
    onClickChangePage: (page: number) => void
}

const TableFooter: FC<TableFooterProps> = ({ limit, total, columnsCount, onClickChangePage }) => {
    const onPageChange = useCallback(
        (_: React.MouseEvent, props: PaginationProps): void => {
            onClickChangePage(Number(props.activePage))
        },
        [onClickChangePage]
    )

    return (
        <Table.Footer>
            <Table.Row>
                <Table.Cell colSpan={(columnsCount ?? 0) + 1} textAlign="center">
                    <Pagination
                        secondary
                        defaultActivePage={1}
                        firstItem="В начало"
                        lastItem="В конец"
                        totalPages={Math.ceil(total / limit)}
                        prevItem="Предыдущая"
                        nextItem="Следующая"
                        onPageChange={onPageChange}
                    />
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter
