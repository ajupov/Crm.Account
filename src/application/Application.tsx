import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes/Routes'

export const Application = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

    useEffect(() => {
        setIsAuthorized(location.search.indexOf('auth') > 0)
    })

    return (
        <BrowserRouter>
            <Routes isAuthorized={isAuthorized} />
        </BrowserRouter>
    )
}
