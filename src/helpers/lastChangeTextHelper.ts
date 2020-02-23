import { toLocaleDateTime } from '../utils/datetime/dateTimeUtils'

function getLastChangeDateTimeText(value: string): string {
    const lastModifyDateTime = toLocaleDateTime(value)

    if (!lastModifyDateTime) {
        return ''
    }

    return `Последнее изменение: ${lastModifyDateTime}`
}
export default getLastChangeDateTimeText
