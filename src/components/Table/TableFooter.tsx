import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableFooterProps {
    page: number
    limit: number
    total: number
    columnsCount?: number
    onClickChangePage: (page: number) => void
}

const TableFooter: FC<TableFooterProps> = ({ page, limit, total, columnsCount, onClickChangePage }) => {
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
                        firstItem="В начало"
                        lastItem="В конец"
                        prevItem="Предыдущая"
                        nextItem="Следующая"
                        activePage={page}
                        totalPages={Math.ceil(total / limit)}
                        onPageChange={onPageChange}
                    />
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter
