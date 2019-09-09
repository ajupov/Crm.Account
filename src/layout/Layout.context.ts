import { createContext } from 'react'

export interface ILayoutContext {
    isAuthorized: boolean
    setIsAuthorized: (value: boolean) => void
}

const initialContext = {
    isAuthorized: false,
    setIsAuthorized: () => {}
}

const { Provider, Consumer } = createContext<ILayoutContext>(initialContext)

export { Provider as LayoutContextProvider, Consumer as LayoutContextConsumer }
