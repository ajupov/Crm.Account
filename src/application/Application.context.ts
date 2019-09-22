import { createContext } from 'react'

export interface IApplicationContext {
    isAuthorized: boolean
}

const initialContext = {
    isAuthorized: false
}

const { Provider, Consumer } = createContext<IApplicationContext>(initialContext)

export { Provider as ApplicationContextProvider, Consumer as ApplicationContextConsumer }
