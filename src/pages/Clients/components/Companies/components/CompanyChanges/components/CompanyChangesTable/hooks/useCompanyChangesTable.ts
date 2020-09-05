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
import { getCompanyIndustryTypeName } from '../../../../../helpers/helpers/companyIndustryTypeHelper'
import { getCompanyTypeName } from '../../../../../helpers/helpers/companyTypeHelper'
import { getDateTimeAsRecently } from '../../../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/companyAttributesMapper'
import { joinBankAccounts } from '../../../../../mappers/companyBankAccountsMapper'

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

        const fileName = getFileNameWithDateTime('История изменений компании')
        const headers = ['Идентификатор', 'Идентификатор компании', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
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
                `Тип: ${getValueOrEmpty(getCompanyTypeName(oldValue?.type))} → ${getValueOrEmpty(
                    getCompanyTypeName(newValue?.type)
                )}`,
                `Род деятельности: ${getValueOrEmpty(
                    getCompanyIndustryTypeName(oldValue?.industryType)
                )} → ${getValueOrEmpty(getCompanyIndustryTypeName(newValue?.industryType))}`,
                `Полное название: ${getValueOrEmpty(oldValue?.fullName)} → ${getValueOrEmpty(newValue?.fullName)}`,
                `Краткое название: ${getValueOrEmpty(oldValue?.shortName)} → ${getValueOrEmpty(newValue?.shortName)}`,
                `Телефон: ${getValueOrEmpty(oldValue?.phone)} → ${getValueOrEmpty(newValue?.phone)}`,
                `Email: ${getValueOrEmpty(oldValue?.email)} → ${getValueOrEmpty(newValue?.email)}`,
                `ИНН: ${getValueOrEmpty(oldValue?.taxNumber)} → ${getValueOrEmpty(newValue?.taxNumber)}`,
                `ОГРН: ${getValueOrEmpty(oldValue?.registrationNumber)} → ${getValueOrEmpty(
                    newValue?.registrationNumber
                )}`,
                `Дата регистрации: ${getValueOrEmpty(oldValue?.registrationDate)} → ${getValueOrEmpty(
                    newValue?.registrationDate
                )}`,
                `Количество сотрудников: ${getValueOrEmpty(oldValue?.employeesCount)} → ${getValueOrEmpty(
                    newValue?.employeesCount
                )}`,
                `Годовой оборот: ${getValueOrEmpty(oldValue?.yearlyTurnover)} → ${getValueOrEmpty(
                    newValue?.yearlyTurnover
                )}`,
                `Почтовый индекс (юридический адрес): ${getValueOrEmpty(
                    oldValue?.juridicalPostcode
                )} → ${getValueOrEmpty(newValue?.juridicalPostcode)}`,
                `Страна (юридический адрес): ${getValueOrEmpty(oldValue?.juridicalCountry)} → ${getValueOrEmpty(
                    newValue?.juridicalCountry
                )}`,
                `Регион (юридический адрес): ${getValueOrEmpty(oldValue?.juridicalRegion)} → ${getValueOrEmpty(
                    newValue?.juridicalRegion
                )}`,
                `Район/провинция (юридический адрес): ${getValueOrEmpty(
                    oldValue?.juridicalProvince
                )} → ${getValueOrEmpty(newValue?.juridicalProvince)}`,
                `Город/населенный пункт (юридический адрес): ${getValueOrEmpty(
                    oldValue?.juridicalCity
                )} → ${getValueOrEmpty(newValue?.juridicalCity)}`,
                `Улица (юридический адрес): ${getValueOrEmpty(oldValue?.juridicalStreet)} → ${getValueOrEmpty(
                    newValue?.juridicalStreet
                )}`,
                `Дом/строение (юридический адрес): ${getValueOrEmpty(oldValue?.juridicalHouse)} → ${getValueOrEmpty(
                    newValue?.juridicalHouse
                )}`,
                `Квартира (юридический адрес): ${getValueOrEmpty(oldValue?.juridicalApartment)} → ${getValueOrEmpty(
                    newValue?.juridicalApartment
                )}`,
                `Почтовый индекс (фактический адрес): ${getValueOrEmpty(oldValue?.legalPostcode)} → ${getValueOrEmpty(
                    newValue?.legalPostcode
                )}`,
                `Страна (фактический адрес): ${getValueOrEmpty(oldValue?.legalCountry)} → ${getValueOrEmpty(
                    newValue?.legalCountry
                )}`,
                `Регион (фактический адрес): ${getValueOrEmpty(oldValue?.legalRegion)} → ${getValueOrEmpty(
                    newValue?.legalRegion
                )}`,
                `Район/провинция (фактический адрес): ${getValueOrEmpty(oldValue?.legalProvince)} → ${getValueOrEmpty(
                    newValue?.legalProvince
                )}`,
                `Город/населенный пункт (фактический адрес): ${getValueOrEmpty(
                    oldValue?.legalCity
                )} → ${getValueOrEmpty(newValue?.legalCity)}`,
                `Улица (фактический адрес): ${getValueOrEmpty(oldValue?.legalStreet)} → ${getValueOrEmpty(
                    newValue?.legalStreet
                )}`,
                `Дом/строение (фактический адрес): ${getValueOrEmpty(oldValue?.legalHouse)} → ${getValueOrEmpty(
                    newValue?.legalHouse
                )}`,
                `Квартира (фактический адрес): ${getValueOrEmpty(oldValue?.legalApartment)} → ${getValueOrEmpty(
                    newValue?.legalApartment
                )}`,

                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Расчетные счета: ${getValueOrEmpty(mapBankAccounts(oldValue?.bankAccounts))} → ${getValueOrEmpty(
                    mapBankAccounts(newValue?.bankAccounts)
                )}`,
                `Атрибуты: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
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
                            {
                                value: change.createDateTime
                                    ? getDateTimeAsRecently(new Date(change.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
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
