import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import ProductCategoriesRoutes from '../../../routes/ProductCategoriesRoutes'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import useProductCategoryView from '../../ProductCategoryView/hooks/useProductCategoryView'

interface UseProductCategoriesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (categories: ProductCategory[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useProductCategoriesTable = (): UseProductCategoriesTableReturn => {
    const state = useContext(ProductCategoriesContext)
    const { onClickDelete, onClickRestore } = useProductCategoryView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const categories = (await state.getAll())?.categories
        if (!categories) {
            return
        }

        const fileName = getFileNameWithDateTime('Категории продукта')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...categories])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickSort = useCallback(
        (columnName: string) => {
            if (state.request.sortBy !== columnName) {
                state.setRequest({ ...state.request, sortBy: columnName, orderBy: 'asc' })
            } else {
                state.setRequest({ ...state.request, orderBy: state.request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [state]
    )

    const getOrderBy = useCallback(
        (columnName: string) => {
            if (state.request.sortBy === columnName) {
                return state.request.orderBy
            }

            return void 0
        },
        [state.request.orderBy, state.request.sortBy]
    )

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const map = useCallback(
        (categories: ProductCategory[]) =>
            categories.map(
                category =>
                    ({
                        id: category.id,
                        cells: [
                            { value: category.name, textAlign: 'left' },
                            {
                                value: category.createDateTime
                                    ? getDateTimeAsRecently(new Date(category.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: category.isDeleted,
                        viewLink: ProductCategoriesRoutes.View,
                        editLink: ProductCategoriesRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Name',
                label: 'Наименование',
                width: 10,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 4,
                onClick: () => onClickSort('CreateDateTime'),
                orderBy: getOrderBy('CreateDateTime')
            }
        ],
        [getOrderBy, onClickSort]
    )

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useProductCategoriesTable
