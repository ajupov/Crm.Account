import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import React, { FC, useEffect } from 'react'

import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import ru from 'date-fns/locale/ru'
import startOfWeek from 'date-fns/startOfWeek'

const locales = {
    ru
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const Calendar: FC = () => {
    useEffect(() => {
        document.title = 'Календарь'
    })

    return (
        <>
            <h1>Календарь</h1>
            <h2>Этот раздел в настоящий момент находится в разработке</h2>
            <div style={{ width: 'calc(100% - 155px)' }}>
                <BigCalendar localizer={localizer} events={[]} startAccessor="start" endAccessor="end" />
            </div>
        </>
    )
}

export default Calendar
