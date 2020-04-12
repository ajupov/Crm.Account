import React, { FC, useContext } from 'react'

import ProductCategoriesContext from '../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import ProductCategory from '../../../../../../../api/products/models/ProductCategory'
import Table from '../../../../../../components/Table/Table'
import { TableBodyRowProps } from '../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/Table/TableHeader'
import { toLocaleDateTime } from '../../../../../../utils/dateTime/dateTimeUtils'
import useProductCategoriesTable from './hooks/useProductCategoriesTable'
import useProductCategoryView from '../ProductCategoryView/hooks/useProductCategoryView'

const ProductCategoriesTable: FC = () => {
    const state = useContext(ProductCategoriesContext)
    const {
        onClickView,
        onClickCreate,
        onClickDownloadAsCsv,
        onClickSort,
        getOrderBy,
        onClickChangePage
    } = useProductCategoriesTable()
    const { onClickEdit, onClickDelete, onClickRestore } = useProductCategoryView()

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
            isLoading={state.isLoading}
            headers={headers}
            rows={map(state.categories)}
            footer={{ limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ProductCategoriesTable
