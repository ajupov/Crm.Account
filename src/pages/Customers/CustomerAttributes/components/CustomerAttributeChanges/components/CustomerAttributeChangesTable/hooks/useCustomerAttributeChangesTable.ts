import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import CustomerAttribute from '../../../../../../../../../api/customers/models/CustomerAttribute'
import CustomerAttributeChange from '../../../../../../../../../api/customers/models/CustomerAttributeChange'
import CustomerAttributeChangesContext from '../../../../../contexts/CustomerAttributeChangesContext/CustomerAttributeChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../../../helpers/entityAttributeTypeHelper'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'

interface UseCustomerAttributeChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (attributes: CustomerAttributeChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCustomerAttributeChangesTable = (): UseCustomerAttributeChangesTableReturn => {
    const state = useContext(CustomerAttributeChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений атрибутов клиента')
        const headers = ['Идентификатор', 'Идентификатор атрибута', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: CustomerAttributeChange) => {
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

    const getChangeValue = useCallback((change: CustomerAttributeChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as CustomerAttribute) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as CustomerAttribute) : void 0

        return [
            `Тип: ${getValueOrEmpty(getAttributeTypeName(oldValue?.type))} → ${getValueOrEmpty(
                getAttributeTypeName(newValue?.type)
            )}`,
            `Наименование: ${getValueOrEmpty(oldValue?.key)} → ${getValueOrEmpty(newValue?.key)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: CustomerAttributeChange[]) =>
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

export default useCustomerAttributeChangesTable
