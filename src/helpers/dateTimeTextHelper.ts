import { toLocaleDateTime } from '../utils/dateTime/dateTimeUtils'

export function getCreateDateTimeText(value?: string): string {
    if (!value) {
        return ''
    }

    const lastModifyDateTime = toLocaleDateTime(value)

    if (!lastModifyDateTime) {
        return ''
    }

    return `Создан: ${lastModifyDateTime}`
}

export function getLastChangeDateTimeText(value?: string): string {
    if (!value) {
        return ''
    }

    const lastModifyDateTime = toLocaleDateTime(value)

    if (!lastModifyDateTime) {
        return ''
    }

    return `Изменен: ${lastModifyDateTime}`
}