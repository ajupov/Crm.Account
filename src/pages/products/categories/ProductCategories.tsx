import React, { FC, useEffect } from 'react'

import { OrderBy } from '../../../components/table/TableData'
import Page from '../../../components/page/Page'
import ProductCategoriesFilter from './filters/ProductCategoriesFilter'
import ProductCategory from '../../../../api/products/models/ProductCategory'
import ProductCategoryDelete from './modals/ProductCategoryDelete'
import ProductCategoryRestore from './modals/ProductCategoryRestore'
import Table from '../../../components/table/Table'
import { TableBodyRowProps } from '../../../components/table/TableBody'
import { TableHeaderCellProps } from '../../../components/table/TableHeader'
import { setPageTitle } from '../../../helpers/pageHelper'
import { toLocaleDateTime } from '../../../utils/dateTime/dateTimeUtils'
import useCreateActions from './hooks/actions/useCreateActions'
import useDeleteActions from './hooks/actions/useDeleteActions'
import useDownloadActions from './hooks/actions/useDownloadActions'
import useEditActions from './hooks/actions/useEditActions'
import useProductCategories from './hooks/useProductCategories'
import useProductsMenu from '../hooks/useProductsMenu'
import useRestoreActions from './hooks/actions/useRestoreActions'
import useViewActions from './hooks/actions/useViewActions'

const ProductCategories: FC = () => {
    const title = 'Категории'

    const { menu } = useProductsMenu()
    const { onClickView } = useViewActions()
    const { onClickCreate } = useCreateActions()
    const { onClickEdit } = useEditActions()
    const { onClickDelete } = useDeleteActions()
    const { onClickRestore } = useRestoreActions()
    const { onClickDownloadAsCsv } = useDownloadActions()
    const {
        isLoading,
        categories,
        limit,
        total,
        lastModifyDateTime,
        onChangePage,
        sortBy,
        orderBy,
        onClickSort,
        getOrderBy
    } = useProductCategories()

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
            orderBy: sortBy === 'CreateDateTime' ? orderBy : void 0
        }
    ]

    useEffect(() => setPageTitle(title), [])

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
        <Page title={title} menu={menu} secondMenu={<ProductCategoriesFilter />}>
            {categories && (
                <Table
                    isLoading={isLoading}
                    headers={headers}
                    rows={map(categories)}
                    footer={{ limit, total, onChangePage }}
                    lastModifyDateTime={lastModifyDateTime}
                    onClickCreate={onClickCreate}
                    onClickDownloadAsCsv={onClickDownloadAsCsv}
                />
            )}

            <ProductCategoryDelete />

            <ProductCategoryRestore />
        </Page>
    )
}

export default ProductCategories
