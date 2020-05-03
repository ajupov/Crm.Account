import { Pagination, PaginationProps, Table } from 'semantic-ui-react'
import React, { FC, useCallback, useMemo } from 'react'

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

    const totalPages = useMemo(() => Math.ceil(total / limit), [limit, total])

    return (
        <Table.Footer>
            {totalPages > 1 ? (
                <Table.Row>
                    <Table.Cell
                        colSpan={(columnsCount ?? 0) + 1}
                        textAlign="center"
                        style={{ borderTop: '1px solid rgba(34,36,38,.1)' }}
                    >
                        <Pagination
                            secondary
                            firstItem={null}
                            lastItem={null}
                            prevItem={null}
                            nextItem={null}
                            activePage={page}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                            pageItem={{ style: { display: 'block', minWidth: 0, padding: '10px' } }}
                        />
                    </Table.Cell>
                </Table.Row>
            ) : null}
        </Table.Footer>
    )
}

export default TableFooter
