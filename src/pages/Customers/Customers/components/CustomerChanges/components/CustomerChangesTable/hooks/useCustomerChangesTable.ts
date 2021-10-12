import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Customer from '../../../../../../../../../api/customers/models/Customer'
import CustomerAttributeLink from '../../../../../../../../../api/customers/models/CustomerAttributeLink'
import CustomerChange from '../../../../../../../../../api/customers/models/CustomerChange'
import CustomerChangesContext from '../../../../../contexts/CustomerChangesContext/CustomerChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/leadAttributesMapper'

interface UseCustomerChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (customers: CustomerChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCustomerChangesTable = (): UseCustomerChangesTableReturn => {
    const state = useContext(CustomerChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений клиента')
        const headers = ['Идентификатор', 'Идентификатор контакта', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: CustomerChange) => {
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

    const mapAttributes = useCallback((links?: CustomerAttributeLink[]) => joinAttributes(links), [])

    const getChangeValue = useCallback(
        (change: CustomerChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Customer) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Customer) : void 0

            return [
                `ID Источника: ${getValueOrEmpty(oldValue?.sourceId)} → ${getValueOrEmpty(newValue?.sourceId)}`,
                `Фамилия: ${getValueOrEmpty(oldValue?.surname)} → ${getValueOrEmpty(newValue?.surname)}`,
                `Имя: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
                `Отчество: ${getValueOrEmpty(oldValue?.patronymic)} → ${getValueOrEmpty(newValue?.patronymic)}`,
                `Телефон: ${getValueOrEmpty(oldValue?.phone)} → ${getValueOrEmpty(newValue?.phone)}`,
                `Email: ${getValueOrEmpty(oldValue?.email)} → ${getValueOrEmpty(newValue?.email)}`,
                `Дата рождения: ${getValueOrEmpty(oldValue?.birthDate)} → ${getValueOrEmpty(newValue?.birthDate)}`,
                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Атрибуты: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
                )}`
            ]
        },
        [mapAttributes]
    )

    const map = useCallback(
        (changes: CustomerChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            {
                                value: change.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(change.createDateTime))
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

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useCustomerChangesTable
