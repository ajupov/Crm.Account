import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import CompaniesContext from '../../../contexts/CompaniesContext/CompaniesContext'
import CompaniesRoutes from '../../../routes/CompaniesRoutes'
import Company from '../../../../../../../../api/companies/models/Company'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import useCompanyView from '../../CompanyView/hooks/useCompanyView'
import { useHistory } from 'react-router'

interface UseCompaniesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (companies: Company[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCompaniesTable = (): UseCompaniesTableReturn => {
    const history = useHistory()
    const state = useContext(CompaniesContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useCompanyView()

    const onClickCreate = useCallback(() => history.push(CompaniesRoutes.Create), [history])

    const onClickView = useCallback((id: string) => history.push(`${CompaniesRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const companies = (await state.getAll())?.companies
        if (!companies) {
            return
        }

        const fileName = getFileNameWithDateTime('Контакты')
        const headers = [
            'Идентификатор',
            'Идентификатор лида',
            'Идентификатор компании',
            'Фамилия',
            'Имя',
            'Отчество',
            'Телефон',
            'Email',
            'ИНН',
            'Должность',
            'Почтовый индекс',
            'Страна',
            'Регион',
            'Район/провинция',
            'Город/населенный пункт',
            'Улица',
            'Дом/строение',
            'Квартира',
            'Дата рождения',
            'Удален',
            'Создан',
            'Изменен'
        ]
        const csv = convertObjectToCSV([headers, ...companies])

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
        (companies: Company[]) =>
            companies.map(
                company =>
                    ({
                        id: company.id,
                        cells: [
                            { value: company.surname, textAlign: 'left' },
                            { value: company.name, textAlign: 'left' },
                            { value: company.patronymic, textAlign: 'left' },
                            { value: company.phone, textAlign: 'left' },
                            { value: company.email, textAlign: 'left' },
                            { value: toLocaleDateTime(company.createDateTime), textAlign: 'center' }
                        ],
                        isDeleted: company.isDeleted,
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
                key: 'Surname',
                label: 'Фамилия',
                width: 3,
                onClick: () => onClickSort('Surname'),
                orderBy: getOrderBy('Surname')
            },
            {
                key: 'Name',
                label: 'Имя',
                width: 3,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'Patronymic',
                label: 'Отчетство',
                width: 3,
                onClick: () => onClickSort('Patronymic'),
                orderBy: getOrderBy('Patronymic')
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage }
}

export default useCompaniesTable
