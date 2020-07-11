import { calculateOffset, calculatePage } from '../../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Company from '../../../../../../../../../../api/companies/models/Company'
import CompanyAttributeLink from '../../../../../../../../../../api/companies/models/CompanyAttributeLink'
import CompanyBankAccount from '../../../../../../../../../../api/companies/models/CompanyBankAccount'
import CompanyChange from '../../../../../../../../../../api/companies/models/CompanyChange'
import CompanyChangesContext from '../../../../../contexts/CompanyChangesContext/CompanyChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/companyAttributesMapper'
import { joinBankAccounts } from '../../../../../mappers/companyBankAccountsMapper'
import { toLocaleDateTime } from '../../../../../../../../../utils/dateTime/dateTimeUtils'

interface UseCompanyChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (companies: CompanyChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCompanyChangesTable = (): UseCompanyChangesTableReturn => {
    const state = useContext(CompanyChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений контакта')
        const headers = ['Идентификатор', 'Идентификатор контакта', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number): void =>
            state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: CompanyChange) => {
        if (!change.oldValueJson && change.newValueJson) {
            return 'Создан'
        }

        if (change.oldValueJson && change.newValueJson) {
            return 'Изменен'
        }

        if (change.oldValueJson && !change.newValueJson) {
            return 'Удален'
        }

        return ''
    }, [])

    const mapAttributes = useCallback((links?: CompanyAttributeLink[]) => joinAttributes(links), [])

    const mapBankAccounts = useCallback((accounts?: CompanyBankAccount[]) => joinBankAccounts(accounts), [])

    const getChangeValue = useCallback(
        (change: CompanyChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Company) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Company) : void 0

            return [
                `ID Лида: ${getValueOrEmpty(oldValue?.leadId)} → ${getValueOrEmpty(newValue?.leadId)}`,
                `ID Компании: ${getValueOrEmpty(oldValue?.companyId)} → ${getValueOrEmpty(newValue?.companyId)}`,
                `Фамилия: ${getValueOrEmpty(oldValue?.surname)} → ${getValueOrEmpty(newValue?.surname)}`,
                `Имя: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
                `Отчество: ${getValueOrEmpty(oldValue?.patronymic)} → ${getValueOrEmpty(newValue?.patronymic)}`,
                `Телефон: ${getValueOrEmpty(oldValue?.phone)} → ${getValueOrEmpty(newValue?.phone)}`,
                `Email: ${getValueOrEmpty(oldValue?.email)} → ${getValueOrEmpty(newValue?.email)}`,
                `ИНН: ${getValueOrEmpty(oldValue?.taxNumber)} → ${getValueOrEmpty(newValue?.taxNumber)}`,
                `Должность: ${getValueOrEmpty(oldValue?.post)} → ${getValueOrEmpty(newValue?.post)}`,
                `Почтовый индекс: ${getValueOrEmpty(oldValue?.postcode)} → ${getValueOrEmpty(newValue?.postcode)}`,
                `Страна: ${getValueOrEmpty(oldValue?.country)} → ${getValueOrEmpty(newValue?.country)}`,
                `Регион: ${getValueOrEmpty(oldValue?.region)} → ${getValueOrEmpty(newValue?.region)}`,
                `Район/провинция: ${getValueOrEmpty(oldValue?.province)} → ${getValueOrEmpty(newValue?.province)}`,
                `Город/населенный пункт: ${getValueOrEmpty(oldValue?.city)} → ${getValueOrEmpty(newValue?.city)}`,
                `Улица: ${getValueOrEmpty(oldValue?.street)} → ${getValueOrEmpty(newValue?.street)}`,
                `Дом/строение: ${getValueOrEmpty(oldValue?.house)} → ${getValueOrEmpty(newValue?.house)}`,
                `Квартира: ${getValueOrEmpty(oldValue?.apartment)} → ${getValueOrEmpty(newValue?.apartment)}`,
                `Дата рождения: ${getValueOrEmpty(oldValue?.birthDate)} → ${getValueOrEmpty(newValue?.birthDate)}`,
                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Расчетные счета: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
                )}`,
                `Атрибуты: ${getValueOrEmpty(mapBankAccounts(oldValue?.bankAccounts))} → ${getValueOrEmpty(
                    mapBankAccounts(newValue?.bankAccounts)
                )}`
            ]
        },
        [mapAttributes, mapBankAccounts]
    )

    const map = useCallback(
        (changes: CompanyChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            { value: toLocaleDateTime(change.createDateTime), textAlign: 'center' }
                        ]
                    } as TableBodyRowProps)
            ),
        [getChangeName, getChangeValue]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Action',
                label: 'Действие',
                width: 3
            },
            {
                key: 'Changes',
                label: 'Изменения',
                width: 10
            },
            {
                key: 'CreateDateTime',
                label: 'Дата и время',
                width: 3
            }
        ],
        []
    )

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useCompanyChangesTable
