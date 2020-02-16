import React, { FC, useEffect } from 'react'

const Calendar: FC = () => {
    useEffect(() => {
        document.title = 'Календарь'
    })

    return <h1>Календарь</h1>
}

export default Calendar
