import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Customer from '../../../../../../../api/customers/models/Customer'
import CustomersContext from '../../../contexts/CustomersContext/CustomersContext'
import CustomersRoutes from '../../../routes/CustomersRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useCustomerView from '../../CustomerView/hooks/useCustomerView'

interface UseCustomersTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (customers: Customer[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCustomersTable = (): UseCustomersTableReturn => {
    const state = useContext(CustomersContext)
    const { onClickDelete, onClickRestore } = useCustomerView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const customers = (await state.getAll())?.customers
        if (!customers) {
            return
        }

        const fileName = getFileNameWithDateTime('Клиенты')
        const headers = [
            'Идентификатор',
            'Идентификатор клиента',
            'Идентификатор компании',
            'Источник',
            'Фамилия',
            'Имя',
            'Отчество',
            'Телефон',
            'Email',
            'Должность',
            'Почтовый индекс',
            'Страна',
            'Регион',
            'Район/провинция',
            'Город/населенный пункт',
            'Улица',
            'Дом/строение',
            'Квартира',
            'Сумма потенциальной сделки',
            'Удален',
            'Создан',
            'Изменен'
        ]
        const csv = convertObjectToCSV([headers, ...customers])

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
        (customers: Customer[]) =>
            customers.map(
                customer =>
                    ({
                        id: customer.id,
                        cells: [
                            { value: customer.source?.name, textAlign: 'left' },
                            { value: customer.name, textAlign: 'left' },
                            { value: customer.phone, textAlign: 'left' },
                            { value: customer.email, textAlign: 'left' },
                            {
                                value: customer.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(customer.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: customer.isDeleted,
                        viewLink: CustomersRoutes.View,
                        editLink: CustomersRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Source',
                label: 'Источник',
                width: 2
            },
            {
                key: 'Name',
                label: 'Имя',
                width: 3,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'Phone',
                label: 'Телефон',
                width: 1,
                onClick: () => onClickSort('Phone'),
                orderBy: getOrderBy('Phone')
            },
            {
                key: 'Email',
                label: 'Email',
                width: 3,
                onClick: () => onClickSort('Email'),
                orderBy: getOrderBy('Email')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 2,
                onClick: () => onClickSort('CreateDateTime'),
                orderBy: getOrderBy('CreateDateTime')
            }
        ],
        [getOrderBy, onClickSort]
    )

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useCustomersTable
