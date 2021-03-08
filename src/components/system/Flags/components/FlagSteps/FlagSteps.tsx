import AccountFlagType from '../../../../../../api/flags/models/AccountFlagType'
import React from 'react'
import UserFlagType from '../../../../../../api/flags/models/UserFlagType'

export type FlagStep = {
    type: 'account' | 'user'
    flag: AccountFlagType | UserFlagType
    title: string
    description: string
    component?: JSX.Element
}

const FlagSteps: FlagStep[] = [
    {
        type: 'account',
        flag: AccountFlagType.IsShownSelectionOfActivitiesIndustry,
        title: 'Выбрать вид деятельности',
        description: 'Выберите вид деятельности',
        component: <p>вид деятельности</p>
    },
    {
        type: 'account',
        flag: AccountFlagType.IsShownCreationDefaultEntities,
        title: 'Настроить аккаунт',
        description: 'Настройте аккаунт',
        component: <p>аккаунт</p>
    },
    {
        type: 'user',
        flag: UserFlagType.IsShownWelcome,
        title: 'Приступить к работе',
        description: 'Начните работу',
        component: <p>начало</p>
    }
]

export default FlagSteps
