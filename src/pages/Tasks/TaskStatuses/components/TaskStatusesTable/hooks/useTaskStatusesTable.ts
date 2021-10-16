import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import TaskStatus from '../../../../../../../api/tasks/models/TaskStatus'
import TaskStatusesContext from '../../../contexts/TaskStatusesContext/TaskStatusesContext'
import TaskStatusesRoutes from '../../../routes/TaskStatusesRoutes'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import { toYesNo } from '../../../../../../utils/yesNo/yesNoUtils'
import useTaskStatusView from '../../TaskStatusView/hooks/useTaskStatusView'

interface UseTaskStatusesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (statuses: TaskStatus[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useTaskStatusesTable = (): UseTaskStatusesTableReturn => {
    const state = useContext(TaskStatusesContext)
    const { onClickDelete, onClickRestore } = useTaskStatusView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const statuses = (await state.getAll())?.statuses
        if (!statuses) {
            return
        }

        const fileName = getFileNameWithDateTime('Статусы задачи')
        const headers = ['Идентификатор', 'Наименование', 'Конечный', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...statuses])

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
        (statuses: TaskStatus[]) =>
            statuses.map(
                status =>
                    ({
                        id: status.id,
                        cells: [
                            { value: status.name, textAlign: 'left' },
                            { value: toYesNo(status.isFinish), textAlign: 'center' },
                            {
                                value: status.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(status.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: status.isDeleted,
                        viewLink: TaskStatusesRoutes.View,
                        editLink: TaskStatusesRoutes.Edit,
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
                width: 8,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'IsFinish',
                label: 'Конечный',
                width: 2,
                onClick: () => onClickSort('IsFinish'),
                orderBy: getOrderBy('IsFinish')
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

export default useTaskStatusesTable
