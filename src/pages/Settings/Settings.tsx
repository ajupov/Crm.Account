import React, { FC, useEffect } from 'react'

const Settings: FC = () => {
    useEffect(() => {
        document.title = 'Настройки аккаунта'
    })

    return (
        <>
            <h1>Настройки аккаунта</h1>
            <h2>Этот раздел в настоящий момент находится в разработке</h2>
        </>
    )
}

export default Settings
