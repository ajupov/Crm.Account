import { toLocaleDateTime } from '../utils/dateTime/dateTimeUtils'

export function getFileNameWithDateTime(value: string): string {
    return value + ' от ' + toLocaleDateTime(new Date())
}
