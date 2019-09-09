import React, { ComponentType, SyntheticEvent, Consumer } from 'react'

interface IClickProps {
    onClick: (event: SyntheticEvent) => void
}

export const withClick = <P extends React.HTMLAttributes<HTMLElement>>(Component: ComponentType<P>) => (
    props: P & IClickProps
) => <Component {...props} />

export const withConsumer = <P extends React.Consumer<P>>(Component: ComponentType<P>) => (props: P) => (
    <Component {...props} />
)
