import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableFooterProps {
    pageSize: number
    totalCount: number
    onChangePage: (page: number) => void
    columnsCount?: number
}

const TableFooter: FC<TableFooterProps> = ({ pageSize, totalCount, onChangePage, columnsCount }) => {
    const onPageChange = useCallback(
        (_: React.MouseEvent, props: PaginationProps): void => {
            onChangePage(Number(props.activePage))
        },
        [onChangePage]
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
                        totalPages={Math.ceil(totalCount / pageSize)}
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
