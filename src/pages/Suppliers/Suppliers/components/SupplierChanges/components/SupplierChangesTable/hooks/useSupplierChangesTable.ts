import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Supplier from '../../../../../../../../../api/suppliers/models/Supplier'
import SupplierAttributeLink from '../../../../../../../../../api/suppliers/models/SupplierAttributeLink'
import SupplierChange from '../../../../../../../../../api/suppliers/models/SupplierChange'
import SupplierChangesContext from '../../../../../contexts/SupplierChangesContext/SupplierChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/supplierAttributesMapper'
import useSupplierAttributesLoad from '../../../../../hooks/load/useSupplierAttributesLoad'

interface UseSupplierChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (suppliers: SupplierChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useSupplierChangesTable = (): UseSupplierChangesTableReturn => {
    const state = useContext(SupplierChangesContext)
    const { attributesAsOptions } = useSupplierAttributesLoad()

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений поставщика')
        const headers = [
            'Идентификатор',
            'Идентификатор поставщика',
            'Дата и время',
            'Старое значение',
            'Новое значение'
        ]
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: SupplierChange) => {
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

    const mapAttributes = useCallback(
        (links?: SupplierAttributeLink[]) => joinAttributes(links, attributesAsOptions),
        [attributesAsOptions]
    )

    const getChangeValue = useCallback(
        (change: SupplierChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Supplier) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Supplier) : void 0

            return [
                `Название: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
                `Телефон: ${getValueOrEmpty(oldValue?.phone)} → ${getValueOrEmpty(newValue?.phone)}`,
                `Email: ${getValueOrEmpty(oldValue?.email)} → ${getValueOrEmpty(newValue?.email)}`,
                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Атрибуты: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
                )}`
            ]
        },
        [mapAttributes]
    )

    const map = useCallback(
        (changes: SupplierChange[]) =>
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

export default useSupplierChangesTable
