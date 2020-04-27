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
                        totalPages={Math.ceil(total / limit)}
                        onPageChange={onPageChange}
                        pageItem={{ style: { display: 'block' } }}
                    />
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter
