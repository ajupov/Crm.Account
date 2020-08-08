import { calculateOffset, calculatePage } from '../../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Contact from '../../../../../../../../../../api/contacts/models/Contact'
import ContactAttributeLink from '../../../../../../../../../../api/contacts/models/ContactAttributeLink'
import ContactBankAccount from '../../../../../../../../../../api/contacts/models/ContactBankAccount'
import ContactChange from '../../../../../../../../../../api/contacts/models/ContactChange'
import ContactChangesContext from '../../../../../contexts/ContactChangesContext/ContactChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/contactAttributesMapper'
import { joinBankAccounts } from '../../../../../mappers/contactBankAccountsMapper'

interface UseContactChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (contacts: ContactChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useContactChangesTable = (): UseContactChangesTableReturn => {
    const state = useContext(ContactChangesContext)

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

    const getChangeName = useCallback((change: ContactChange) => {
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

    const mapAttributes = useCallback((links?: ContactAttributeLink[]) => joinAttributes(links), [])

    const mapBankAccounts = useCallback((accounts?: ContactBankAccount[]) => joinBankAccounts(accounts), [])

    const getChangeValue = useCallback(
        (change: ContactChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Contact) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Contact) : void 0

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
        (changes: ContactChange[]) =>
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

export default useContactChangesTable
