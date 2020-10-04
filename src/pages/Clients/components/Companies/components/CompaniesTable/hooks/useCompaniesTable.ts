import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import CompaniesContext from '../../../contexts/CompaniesContext/CompaniesContext'
import CompaniesRoutes from '../../../routes/CompaniesRoutes'
import Company from '../../../../../../../../api/companies/models/Company'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import useCompanyView from '../../CompanyView/hooks/useCompanyView'

interface UseCompaniesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (companies: Company[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCompaniesTable = (): UseCompaniesTableReturn => {
    const state = useContext(CompaniesContext)
    const { onClickDelete, onClickRestore } = useCompanyView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const companies = (await state.getAll())?.companies
        if (!companies) {
            return
        }

        const fileName = getFileNameWithDateTime('Компании')
        const headers = [
            'Идентификатор',
            'Идентификатор лида',
            'Тип',
            'Род деятельности',
            'Полное название',
            'Краткое название',
            'Телефон',
            'Email',
            'ИНН',
            'ОРГН',
            'Дата регистрации',
            'Количество сотрудников',
            'Годовой оборот',
            'Почтовый индекс (юридический адрес)',
            'Страна (юридический адрес)',
            'Регион (юридический адрес)',
            'Район/провинция (юридический адрес)',
            'Город/населенный пункт (юридический адрес)',
            'Улица (юридический адрес)',
            'Дом/строение (юридический адрес)',
            'Квартира (юридический адрес)',
            'Почтовый индекс (фактический адрес)',
            'Страна (фактический адрес)',
            'Регион (фактический адрес)',
            'Район/провинция (фактический адрес)',
            'Город/населенный пункт (фактический адрес)',
            'Улица (фактический адрес)',
            'Дом/строение (фактический адрес)',
            'Квартира (фактический адрес)',
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
                            { value: company.shortName, textAlign: 'left' },
                            { value: company.taxNumber, textAlign: 'left' },
                            { value: company.juridicalRegion, textAlign: 'left' },
                            { value: company.juridicalProvince, textAlign: 'left' },
                            { value: company.juridicalCity, textAlign: 'left' },
                            {
                                value: company.createDateTime
                                    ? getDateTimeAsRecently(new Date(company.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: company.isDeleted,
                        viewLink: CompaniesRoutes.View,
                        editLink: CompaniesRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'ShortName',
                label: 'Название',
                width: 3,
                onClick: () => onClickSort('ShortName'),
                orderBy: getOrderBy('ShortName')
            },
            {
                key: 'TaxNumber',
                label: 'ИНН',
                width: 2,
                onClick: () => onClickSort('TaxNumber'),
                orderBy: getOrderBy('TaxNumber')
            },
            {
                key: 'Region',
                label: 'Регион',
                width: 3,
                onClick: () => onClickSort('Region'),
                orderBy: getOrderBy('Region')
            },
            {
                key: 'Province',
                label: 'Район/провинция',
                width: 3,
                onClick: () => onClickSort('Province'),
                orderBy: getOrderBy('Province')
            },
            {
                key: 'City',
                label: 'Город/населенный пункт',
                width: 3,
                onClick: () => onClickSort('City'),
                orderBy: getOrderBy('City')
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

export default useCompaniesTable
