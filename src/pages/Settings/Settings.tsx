import React, { FC, useEffect } from 'react'

const Settings: FC = () => {
    useEffect(() => {
        document.title = 'Настройки'
    })

    return <h1>Настройки</h1>
}

export default Settings
