import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Lead from '../../../../../../../../api/customers/models/Lead'
import LeadsContext from '../../../contexts/LeadsContext/LeadsContext'
import LeadsRoutes from '../../../routes/LeadsRoutes'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import useLeadView from '../../LeadView/hooks/useLeadView'

interface UseLeadsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (leads: Lead[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useLeadsTable = (): UseLeadsTableReturn => {
    const state = useContext(LeadsContext)
    const { onClickDelete, onClickRestore } = useLeadView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const leads = (await state.getAll())?.leads
        if (!leads) {
            return
        }

        const fileName = getFileNameWithDateTime('Лиды')
        const headers = [
            'Идентификатор',
            'Идентификатор лида',
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
        const csv = convertObjectToCSV([headers, ...leads])

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
        (leads: Lead[]) =>
            leads.map(
                lead =>
                    ({
                        id: lead.id,
                        cells: [
                            { value: lead.surname, textAlign: 'left' },
                            { value: lead.name, textAlign: 'left' },
                            { value: lead.patronymic, textAlign: 'left' },
                            { value: lead.companyName, textAlign: 'left' },
                            { value: lead.phone, textAlign: 'left' },
                            { value: lead.email, textAlign: 'left' },
                            {
                                value: lead.createDateTime ? getDateTimeAsRecently(new Date(lead.createDateTime)) : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: lead.isDeleted,
                        viewLink: LeadsRoutes.View,
                        editLink: LeadsRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Surname',
                label: 'Фамилия',
                width: 2,
                onClick: () => onClickSort('Surname'),
                orderBy: getOrderBy('Surname')
            },
            {
                key: 'Name',
                label: 'Имя',
                width: 2,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'Patronymic',
                label: 'Отчетство',
                width: 2,
                onClick: () => onClickSort('Patronymic'),
                orderBy: getOrderBy('Patronymic')
            },
            {
                key: 'CompanyName',
                label: 'Компания',
                width: 3,
                onClick: () => onClickSort('CompanyName'),
                orderBy: getOrderBy('CompanyName')
            },
            {
                key: 'Phone',
                label: 'Телефон',
                width: 2,
                onClick: () => onClickSort('Phone'),
                orderBy: getOrderBy('Phone')
            },
            {
                key: 'Email',
                label: 'Email',
                width: 2,
                onClick: () => onClickSort('Email'),
                orderBy: getOrderBy('Email')
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

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useLeadsTable
