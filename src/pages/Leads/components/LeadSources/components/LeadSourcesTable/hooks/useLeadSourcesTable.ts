import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import LeadSource from '../../../../../../../../api/leads/models/LeadSource'
import LeadSourcesContext from '../../../contexts/LeadSourcesContext/LeadSourcesContext'
import LeadSourcesRoutes from '../../../routes/LeadSourcesRoutes'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import useLeadSourceView from '../../LeadSourceView/hooks/useLeadSourceView'

interface UseLeadSourcesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (sources: LeadSource[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useLeadSourcesTable = (): UseLeadSourcesTableReturn => {
    const state = useContext(LeadSourcesContext)
    const { onClickDelete, onClickRestore } = useLeadSourceView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const sources = (await state.getAll())?.sources
        if (!sources) {
            return
        }

        const fileName = getFileNameWithDateTime('Источники лида')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...sources])

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
        (sources: LeadSource[]) =>
            sources.map(
                source =>
                    ({
                        id: source.id,
                        cells: [
                            { value: source.name, textAlign: 'left' },
                            {
                                value: source.createDateTime
                                    ? getDateTimeAsRecently(new Date(source.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: source.isDeleted,
                        viewLink: LeadSourcesRoutes.View,
                        editLink: LeadSourcesRoutes.Edit,
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

export default useLeadSourcesTable
