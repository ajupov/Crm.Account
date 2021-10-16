import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import TaskType from '../../../../../../../api/tasks/models/TaskType'
import TaskTypesContext from '../../../contexts/TaskTypesContext/TaskTypesContext'
import TaskTypesRoutes from '../../../routes/TaskTypesRoutes'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useTaskTypeView from '../../TaskTypeView/hooks/useTaskTypeView'

interface UseTaskTypesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (types: TaskType[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useTaskTypesTable = (): UseTaskTypesTableReturn => {
    const state = useContext(TaskTypesContext)
    const { onClickDelete, onClickRestore } = useTaskTypeView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const types = (await state.getAll())?.types
        if (!types) {
            return
        }

        const fileName = getFileNameWithDateTime('Типы заказа')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...types])

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
        (types: TaskType[]) =>
            types.map(
                type =>
                    ({
                        id: type.id,
                        cells: [
                            { value: type.name, textAlign: 'left' },
                            {
                                value: type.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(type.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: type.isDeleted,
                        viewLink: TaskTypesRoutes.View,
                        editLink: TaskTypesRoutes.Edit,
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

export default useTaskTypesTable
