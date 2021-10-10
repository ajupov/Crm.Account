/* eslint-disable @typescript-eslint/no-magic-numbers */

import { DateTimeAsRecentlyTranslateOptions, defaultTranslateOptions } from './DateTimeAsRecentlyTranslateOptions'

import { getPluralform } from '../pluralize/pluralizeUtils'

export function toLocalTime(value?: Date): string {
    return value ? value.toLocaleTimeString().slice(0, -3) : ''
}

export function toLocaleDateTime(value: string | Date | undefined): string {
    if (!value) {
        return ''
    }

    if (typeof value === 'string') {
        const date = new Date(value)

        return `${date.toLocaleDateString()} в ${toLocalTime(date)}`
    }

    return `${value.toLocaleDateString()} в ${toLocalTime(value)}`
}

export function addUtcKind(value: string | undefined): Date {
    if (!value) {
        return new Date()
    }

    if (typeof value === 'string') {
        return new Date(value + 'Z')
    }

    return new Date()
}

export function getDateTimeAsRecently(
    value?: Date,
    translateOptions: DateTimeAsRecentlyTranslateOptions = defaultTranslateOptions
): string {
    if (!value) {
        return ''
    }

    const valueAsDate = typeof value === 'string' ? new Date(value) : value

    const now = new Date()

    const yesterday = new Date(now)
    yesterday.setDate(now.getDate() - 1)

    if (
        valueAsDate.getFullYear() === yesterday.getFullYear() &&
        valueAsDate.getMonth() === yesterday.getMonth() &&
        valueAsDate.getDate() === yesterday.getDate()
    ) {
        return translateOptions.yesterday + ' в ' + toLocalTime(valueAsDate)
    }

    if (
        valueAsDate.getFullYear() === now.getFullYear() &&
        valueAsDate.getMonth() === now.getMonth() &&
        valueAsDate.getDate() === now.getDate()
    ) {
        const milliSeconds = now.getTime() - valueAsDate.getTime()
        if (milliSeconds < 1000) {
            return translateOptions.now
        }

        const seconds = Math.floor(milliSeconds / 1000)
        if (seconds < 60) {
            return `${`${seconds === 1 ? '' : seconds.toString()} ${getPluralform(
                seconds,
                translateOptions.firstPlural.second,
                translateOptions.secondPlural.second,
                translateOptions.thirdPlural.second
            )}`} ${translateOptions.ago}`
        }

        const minutes = Math.floor(seconds / 60)
        if (minutes < 60) {
            return `${`${minutes === 1 ? '' : minutes.toString()} ${getPluralform(
                minutes,
                translateOptions.firstPlural.minute,
                translateOptions.secondPlural.minute,
                translateOptions.thirdPlural.minute
            )}`} ${translateOptions.ago}`
        }

        const hours = Math.floor(minutes / 60)
        if (hours === 1) {
            return `${translateOptions.firstPlural.hour} ${translateOptions.ago}`
        }

        return `${translateOptions.today} в ${toLocalTime(valueAsDate)}`
    }

    return toLocaleDateTime(valueAsDate)
}
