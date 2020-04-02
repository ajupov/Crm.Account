import React, { FC, useContext } from 'react'

import ProductCategoriesContext from '../contexts/ProductCategoriesContext'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import Table from '../../../../components/Table/Table'
import { TableBodyRowProps } from '../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../components/Table/TableHeader'
import { toLocaleDateTime } from '../../../../utils/dateTime/dateTimeUtils'
import useActions from '../hooks/useActions'
import useDeleteActions from '../hooks/useDeleteActions'
import useDownloadActions from '../hooks/useDownloadActions'
import useProductCategoriesPaging from '../hooks/useProductCategoriesPaging'
import useProductCategoriesSorting from '../hooks/useProductCategoriesSorting'
import useRestoreActions from '../hooks/useRestoreActions'

const ProductCategoriesTable: FC = () => {
    const { isLoading, categories, total, lastModifyDateTime } = useContext(ProductCategoriesContext)

    const { onClickCreate, onClickView, onClickEdit } = useActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { onClickDownloadAsCsv } = useDownloadActions()
    const { onClickSort, getOrderBy } = useProductCategoriesSorting()
    const { limit, onClickChangePage } = useProductCategoriesPaging()

    const headers: TableHeaderCellProps[] = [
        {
            key: 'Name',
            label: 'Наименование',
            width: 8,
            onClick: () => onClickSort('Name'),
            orderBy: getOrderBy('Name')
        },
        {
            key: 'CreateDateTime',
            label: 'Создан',
            width: 3,
            onClick: () => onClickSort('CreateDateTime'),
            orderBy: getOrderBy('CreateDateTime')
        }
    ]

    const map = (categories: ProductCategory[]): TableBodyRowProps[] =>
        categories.map(category => ({
            id: category.id,
            cells: [
                { value: category.name, textAlign: 'left' },
                { value: toLocaleDateTime(category.createDateTime), textAlign: 'center' }
            ],
            isDeleted: category.isDeleted,
            onClickRow: onClickView,
            onClickEditButton: onClickEdit,
            onClickDeleteButton: onClickDelete,
            onClickRestoreButton: onClickRestore
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
