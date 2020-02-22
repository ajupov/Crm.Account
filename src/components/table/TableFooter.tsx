import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TableFooterProps {
    pageSize: number
    totalCount: number
    onChangePage: (page: number) => void
    onClickDeleteButton?: () => void
}

const TableFooter: FC<TableFooterProps> = ({ pageSize, totalCount, onChangePage }) => {
    const onPageChange = useCallback(
        (_: React.MouseEvent, props: PaginationProps): void => {
            onChangePage(Number(props.activePage))
        },
        [onChangePage]
    )

    return (
        <Table.Footer>
            <Pagination
                secondary
                defaultActivePage={1}
                firstItem="В начало"
                lastItem="В конец"
                totalPages={Math.floor(totalCount / pageSize)}
                prevItem="Предыдущая"
                nextItem="Следующая"
                onPageChange={onPageChange}
            />
            {/* <Table.Row textAlign="center">
                <Table.HeaderCell colSpan={spanCount ?? 1}></Table.HeaderCell>
            </Table.Row> */}
        </Table.Footer>
    )
}

export default TableFooter
