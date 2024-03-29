import { addUtcKind, getDateTimeAsRecently } from '../utils/dateTime/dateTimeUtils'

export function getCreateDateTimeText(value?: string): string {
    if (!value) {
        return ''
    }

    const lastModifyDateTime = getDateTimeAsRecently(addUtcKind(value))

    if (!lastModifyDateTime) {
        return ''
    }

    // TODO: Move to l10n
    return `Создан: ${lastModifyDateTime}`
}

export function getLastChangeDateTimeText(value?: string): string {
    if (!value) {
        return ''
    }

    const lastModifyDateTime = getDateTimeAsRecently(addUtcKind(value))

    if (!lastModifyDateTime) {
        return ''
    }

    // TODO: Move to l10n
    return `Последнее изменение: ${lastModifyDateTime}`
}
