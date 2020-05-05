import { calculateOffset, calculatePage } from '../../../../../../../helpers/paginationHelper'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductsContext from '../../../contexts/ProductsContext/ProductsContext'
import { ProductsRoutes } from '../../../routes/ProductsRoutes'
import { TableBodyRowProps } from '../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../../helpers/productTypeHelper'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { useHistory } from 'react-router'
import useProductView from '../../ProductView/hooks/useProductView'

interface UseProductsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (products: Product[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductsTable = (): UseProductsTableReturn => {
    const history = useHistory()
    const state = useContext(ProductsContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useProductView()

    const onClickCreate = useCallback(() => history.push(ProductsRoutes.Create), [history])

    const onClickView = useCallback((id: string) => history.push(`${ProductsRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const products = (await state.getAll())?.products
        if (!products) {
            return
        }

        const fileName = 'Атрибуты'
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
        (page: number): void =>
            state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
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
                            { value: getAttributeTypeName(product.type), textAlign: 'left' },
                            { value: product.vendorCode, textAlign: 'left' },
                            { value: product.price.toFixed(2) + ' ₽', textAlign: 'right' },
                            { value: toLocaleDateTime(product.createDateTime), textAlign: 'center' }
                        ],
                        isDeleted: product.isDeleted,
                        onClickRow: onClickView,
                        onClickEditButton: onClickEdit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickEdit, onClickRestore, onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Key',
                label: 'Наименование',
                width: 6,
                onClick: () => onClickSort('Key'),
                orderBy: getOrderBy('Key')
            },
            {
                key: 'Type',
                label: 'Тип',
                width: 2,
                onClick: () => onClickSort('Type'),
                orderBy: getOrderBy('Type')
            },
            {
                key: 'VendorCode',
                label: 'Артикул',
                width: 1,
                onClick: () => onClickSort('VendorCode'),
                orderBy: getOrderBy('VendorCode')
            }, {
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

    return { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage }
}

export default useProductsTable
