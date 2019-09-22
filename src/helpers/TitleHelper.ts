import { Path } from '../enums/Path'

export const GetTitle = () => {
    switch (window.location.pathname) {
        case Path.home:
        case Path.dashboard:
            return 'CRM'
        case Path.about:
            return 'О нас'
        case Path.careers:
            return 'Вакансии'
        case Path.account:
            return 'Мой аккаунт'
        case Path.calendar:
            return 'Календарь'
        case Path.activities:
            return 'Задачи'
        case Path.deals:
            return 'Сделки'
        case Path.leads:
            return 'Лиды'
        case Path.contacts:
            return 'Контакты'
        case Path.products:
            return 'Продукты'
        case Path.settings:
            return 'Настройки'
        default:
            return ''
    }
}
