import React, { FC, useEffect } from 'react'

const Settings: FC = () => {
    useEffect(() => {
        document.title = 'Настройки аккаунта'
    })

    return <h1>Настройки аккаунта</h1>
}

export default Settings
