import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductsContext from '../../../contexts/ProductsContext/ProductsContext'
import ProductsRoutes from '../../../routes/ProductsRoutes'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import { toCurrency } from '../../../../../../../utils/currency/currencyUtils'
import { useHistory } from 'react-router'
import useProductView from '../../ProductView/hooks/useProductView'

interface UseProductsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (products: Product[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useProductsTable = (): UseProductsTableReturn => {
    const history = useHistory()
    const state = useContext(ProductsContext)
    const { onClickDelete, onClickRestore } = useProductView()

    const onClickView = useCallback((id: string) => history.push(`${ProductsRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const products = (await state.getAll())?.products
        if (!products) {
            return
        }

        const fileName = getFileNameWithDateTime('Продукты')
        const headers = ['Идентификатор', 'Тип', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...products])

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
        (products: Product[]) =>
            products.map(
                product =>
                    ({
                        id: product.id,
                        cells: [
                            { value: product.name, textAlign: 'left' },
                            { value: product.vendorCode, textAlign: 'left' },
                            { value: product.status?.name, textAlign: 'left' },
                            { value: toCurrency(product.price), textAlign: 'right' },
                            {
                                value: product.createDateTime
                                    ? getDateTimeAsRecently(new Date(product.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: product.isDeleted,
                        onClickRow: onClickView,
                        editLink: ProductsRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore, onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Name',
                label: 'Наименование',
                width: 4,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'VendorCode',
                label: 'Артикул',
                width: 1,
                onClick: () => onClickSort('VendorCode'),
                orderBy: getOrderBy('VendorCode')
            },
            {
                key: 'Status',
                label: 'Статус',
                width: 2,
                onClick: () => onClickSort('StatusId'),
                orderBy: getOrderBy('StatusId')
            },
            {
                key: 'price',
                label: 'Цена',
                width: 2,
                onClick: () => onClickSort('Price'),
                orderBy: getOrderBy('Price')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 3,
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

export default useProductsTable
