import React, { FC, useContext } from 'react'

import ProductCategoriesContext from './contexts/ProductCategoriesContext'
import ProductCategory from '../../../../api/products/models/ProductCategory'
import Table from '../../../components/table/Table'
import { TableBodyRowProps } from '../../../components/table/TableBody'
import { TableHeaderCellProps } from '../../../components/table/TableHeader'
import { toLocaleDateTime } from '../../../utils/dateTime/dateTimeUtils'
import useCreateActions from './hooks/actions/useCreateActions'
import useDeleteActions from './hooks/actions/useDeleteActions'
import useDownloadActions from './hooks/actions/useDownloadActions'
import useEditActions from './hooks/actions/useEditActions'
import useProductCategoriesPaging from './hooks/useProductCategoriesPaging'
import useProductCategoriesSorting from './hooks/useProductCategoriesSorting'
import useRestoreActions from './hooks/actions/useRestoreActions'
import useViewActions from './hooks/actions/useViewActions'

const ProductCategoriesTable: FC = () => {
    const { isLoading, categories, total, lastModifyDateTime } = useContext(ProductCategoriesContext)

    const { onClickView } = useViewActions()
    const { onClickCreate } = useCreateActions()
    const { onClickEdit } = useEditActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { onClickDownloadAsCsv } = useDownloadActions()
    const { onClickSort, getOrderBy } = useProductCategoriesSorting()
    const { limit, onClickChangePage } = useProductCategoriesPaging()

    const headers: TableHeaderCellProps[] = [
        {
            label: 'Наименование',
            width: 8,
            onClick: () => onClickSort('Name'),
            orderBy: getOrderBy('Name')
        },
        {
            label: 'Создан',
            width: 3,
            onClick: () => {
                // eslint-disable-next-line no-debugger
                debugger
                onClickSort('CreateDateTime')
            },
            orderBy: getOrderBy('CreateDateTime')
        }
    ]

    const map = (categories: ProductCategory[]): TableBodyRowProps[] =>
        categories.map(category => ({
            cells: [
                { value: category.name, textAlign: 'left' },
                { value: toLocaleDateTime(category.createDateTime), textAlign: 'center' }
            ],
            isDeleted: category.isDeleted,
            onClickRow: onClickView(category.id),
            onClickEditButton: onClickEdit(category.id),
            onClickDeleteButton: onClickDelete(category.id),
            onClickRestoreButton: onClickRestore(category.id)
        }))

    return (
        <Table
            isLoading={isLoading}
            headers={headers}
            rows={map(categories)}
            footer={{ limit, total, onClickChangePage }}
            lastModifyDateTime={lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductCategoriesTable
