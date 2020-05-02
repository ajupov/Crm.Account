import React, { FC, useEffect, useState } from 'react'

const Clock: FC = () => {
    const Milliseconds = 1000

    const [value, setValue] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => setValue(new Date()), Milliseconds)

        return () => clearInterval(intervalId)
    })

    return <div>{value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
}

export default Clock
