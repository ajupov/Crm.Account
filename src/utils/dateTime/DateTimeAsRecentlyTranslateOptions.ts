export interface DateTimeAsRecentlyTranslatePluralOptions {
    second: string
    minute: string
    hour?: string
}

export interface DateTimeAsRecentlyTranslateOptions {
    now: string
    ago: string
    firstPlural: DateTimeAsRecentlyTranslatePluralOptions
    secondPlural: DateTimeAsRecentlyTranslatePluralOptions
    thirdPlural: DateTimeAsRecentlyTranslatePluralOptions
    today: string
    yesterday: string
}

export const defaultTranslateOptions: DateTimeAsRecentlyTranslateOptions = {
    now: 'сейчас',
    ago: 'назад',
    firstPlural: {
        second: 'секунду',
        minute: 'минуту',
        hour: 'час'
    },
    secondPlural: {
        second: 'секунды',
        minute: 'минуты'
    },
    thirdPlural: {
        second: 'секунд',
        minute: 'минут'
    },
    today: 'сегодня',
    yesterday: 'вчера'
}
