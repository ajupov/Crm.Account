import React from 'react'
import { Link } from 'react-router-dom'
import { Path } from '../../enums/Path'

export const AuthorizedLayout = () => (
    <>
        <Link to={Path.dashboard}>Дашборд</Link>
        <Link to={Path.calendar}>Календарь</Link>
        <Link to={Path.activities}>Задачи</Link>
        <Link to={Path.deals}>Сделки</Link>
        <Link to={Path.leads}>Лиды</Link>
        <Link to={Path.contacts}>Контакты</Link>
        <Link to={Path.products}>Продукты</Link>
    </>
)
