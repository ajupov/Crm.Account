import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

interface TableFooter {
    spanCount?: number
    totalPages: number
    onChangePage: (page: number) => void
}

const TableFooter: FC<TableFooter> = ({ spanCount, totalPages, onChangePage }) => {
    const onPageChange = useCallback(
        (_: React.MouseEvent, props: PaginationProps): void => {
            onChangePage(Number(props.activePage))
        },
        [onChangePage]
    )

    const renderPagination = (): JSX.Element => (
        <Pagination
            secondary
            defaultActivePage={1}
            firstItem="В начало"
            lastItem="В конец"
            totalPages={Math.floor(totalPages)}
            prevItem="Предыдущая"
            nextItem="Следующая"
            onPageChange={onPageChange}
        />
    )

    return (
        <Table.Footer>
            <Table.Row textAlign="center">
                <Table.HeaderCell colSpan={spanCount ?? 1}>{renderPagination()}</Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter
