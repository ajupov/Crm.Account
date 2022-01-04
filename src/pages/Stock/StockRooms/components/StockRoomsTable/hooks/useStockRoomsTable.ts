import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockRoom from '../../../../../../../api/stock/models/StockRoom'
import StockRoomsContext from '../../../contexts/StockRoomsContext/StockRoomsContext'
import StockRoomsRoutes from '../../../routes/StockRoomsRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useStockRoomView from '../../StockRoomView/hooks/useStockRoomView'

interface UseStockRoomsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (rooms: StockRoom[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockRoomsTable = (): UseStockRoomsTableReturn => {
    const state = useContext(StockRoomsContext)
    const { onClickDelete, onClickRestore } = useStockRoomView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const rooms = (await state.getAll())?.rooms
        if (!rooms) {
            return
        }

        const fileName = getFileNameWithDateTime('Склады')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...rooms])

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
        (rooms: StockRoom[]) =>
            rooms.map(
                room =>
                    ({
                        id: room.id,
                        cells: [
                            { value: room.name, textAlign: 'left' },
                            {
                                value: room.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(room.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: room.isDeleted,
                        viewLink: StockRoomsRoutes.View,
                        editLink: StockRoomsRoutes.Edit,
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

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useStockRoomsTable
