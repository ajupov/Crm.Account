/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */

import { Pagination, Table } from 'semantic-ui-react'
import React, { FC } from 'react'

interface TableFooter {
    spanCount?: number
}

const TableFooter: FC<TableFooter> = ({ spanCount }) => {
    const renderPagination = (): JSX.Element => (
        <Pagination
            secondary
            defaultActivePage={1}
            firstItem="В начало"
            lastItem={null}
            totalPages={0}
            prevItem="Предыдущая"
            nextItem="Следующая"
            onPageChange={(_, data) => {
                alert(data.activePage)
            }}
        />
    )

    return (
        <Table.Footer>
            <Table.Row textAlign="right">
                <Table.HeaderCell colSpan={spanCount ?? 1}>{renderPagination()}</Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    )
}

export default TableFooter
