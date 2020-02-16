import React, { FC, useEffect } from 'react'

const Activities: FC = () => {
    useEffect(() => {
        document.title = 'Задачи'
    })

    return <h1>Задачи</h1>
}

export default Activities
