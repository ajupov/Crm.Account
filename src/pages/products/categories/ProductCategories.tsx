import React, { FC, useEffect } from 'react'

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
import useProductCategoriesPaging from './hooks/useProductCategoriesPaging'
import useProductCategoriesSorting from './hooks/useProductCategoriesSorting'
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
    const { onClickSort, getOrderBy } = useProductCategoriesSorting()
    const { limit, onClickChangePage } = useProductCategoriesPaging()
    const { isLoading, categories, total, lastModifyDateTime } = useProductCategories()

    useEffect(() => setPageTitle(title), [])

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
            onClick: () => onClickSort('CreateDateTime'),
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
        <Page title={title} menu={menu} secondMenu={<ProductCategoriesFilter />}>
            {categories && (
                <Table
                    isLoading={isLoading}
                    headers={headers}
                    rows={map(categories)}
                    footer={{ limit, total, onClickChangePage }}
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
