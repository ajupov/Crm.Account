import React, { useEffect } from 'react'
import { NotAuthorizedLayout } from '../../layout/NotAuthorizedLayout/NotAuthorizedLayout'
import { JobsSegment } from './JobsSegment/InfosSegment'

export const Careers = () => {
    useEffect(() => {
        document.title = 'Вакансии'
    })

    return (
        <NotAuthorizedLayout>
            <JobsSegment />
        </NotAuthorizedLayout>
    )
}
