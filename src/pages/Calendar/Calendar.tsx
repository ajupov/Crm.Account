import React, { FC, useEffect } from 'react'

import Layout from '../../components/layout/Layout'

const Calendar: FC = () => {
    useEffect(() => {
        document.title = 'Календарь'
    })

    return (
        <Layout>
            <h1>Календарь</h1>
        </Layout>
    )
}

export default Calendar
