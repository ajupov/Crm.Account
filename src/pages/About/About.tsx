import React, { useEffect } from 'react'

export const About = () => {
    useEffect(() => {
        document.title = 'О нас'
    })

    return <h1>О нас</h1>
}
