import React, { ComponentType, SyntheticEvent } from 'react'

interface IClickProps {
    onClick: (event: SyntheticEvent) => void
}

export const withClick = <P extends React.HTMLAttributes<HTMLElement>>(Component: ComponentType<P>) => (
    props: P & IClickProps
) => <Component {...props} />
