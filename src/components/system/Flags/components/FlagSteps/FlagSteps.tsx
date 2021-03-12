import AccountFlagType from '../../../../../../api/account/models/AccountFlagType'
import React from 'react'
import UserFlagType from '../../../../../../api/user/models/UserFlagType'

export type FlagStepType = 'account' | 'user'

export type FlagStep = {
    type: FlagStepType
    flag: AccountFlagType | UserFlagType
    title: string
    description: string
    component?: JSX.Element
}

const FlagSteps: FlagStep[] = [
    {
        type: 'account',
        flag: AccountFlagType.IsShownSelectionOfActivityIndustry,
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
